import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

export async function POST(request: NextRequest) {
    try {
        const { domain, user_uid } = await request.json();

        if (!domain || !user_uid) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        const websiteRef = db.collection('Website').doc(domain);
        const doc = await websiteRef.get();

        if (doc.exists) {
            return NextResponse.json({ success: false, message: 'Website already exists.' }, { status: 400 });
        }

        const response = await fetch(`https://${domain}`);
        const html = await response.text();
        const isInstalled = html.includes(`https://quampi.vercel.app/quampi.js`);

        if (isInstalled) {
            await websiteRef.set({
                created_at: new Date(),
                domain,
                created_by: user_uid,
            });
        } else {
            return NextResponse.json({ success: false, message: 'Script is not mounted.' }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: 'Website added successfully.' }, { status: 200 });
    } catch (error) {
        console.error('Error adding website:', error);
        return NextResponse.json({ success: false, message: 'An error occurred while adding the website.' }, { status: 500 });
    }
}