import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import { rateLimit } from '@/utils/rate-limit';

if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
}

const db = getFirestore();

const limiter = rateLimit({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 500,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        await limiter.check(res, 10, 'CACHE_TOKEN');
    } catch {
        return res.status(429).json({ error: 'Rate limit exceeded' });
    }

    const { n: eventName, d: domain, ...eventData } = req.body;

    if (!eventName || !domain) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const referer = req.headers.referer || req.headers.origin;
    if (!referer || !referer.includes(domain)) {
        return res.status(403).json({ error: 'Invalid origin' });
    }

    try {
        await db.collection('events').add({
            eventName,
            domain,
            ...eventData,
            timestamp: Timestamp.now(),
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error storing event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}