import { NextRequest, NextResponse } from 'next/server';
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
    interval: 60 * 1000, // 1 minute
    uniqueTokenPerInterval: 500,
});

export async function POST(req: NextRequest) {
    const ip = req.ip || 'unknown';

    try {
        await limiter.check(ip, 10);
    } catch {
        return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body = await req.json();
    const { n: eventName, d: domain, ...eventData } = body;

    if (!eventName || !domain) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const referer = req.headers.get('referer') || req.headers.get('origin');
    if (!referer || !referer.includes(domain)) {
        return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
    }

    try {
        await db.collection(`Website/${domain}/Event`).add({
            eventName,
            domain,
            ...eventData,
            timestamp: Timestamp.now(),
            ip,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error storing event:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}