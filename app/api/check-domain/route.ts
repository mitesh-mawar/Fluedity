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
        const { domain } = await request.json();

        if (!domain) {
            return NextResponse.json({ success: false, message: 'Missing domain' }, { status: 400 });
        }

        const websiteRef = db.collection('Website').doc(domain);
        const doc = await websiteRef.get();

        if (doc.exists) {
            return NextResponse.json({ exists: true, message: 'Website already exists.' }, { status: 200 });
        } else {
            return NextResponse.json({ exists: false, message: 'Website does not exist.' }, { status: 200 });
        }
    } catch (error) {
        console.error('Error checking website:', error);
        return NextResponse.json({ success: false, message: 'An error occurred while checking the website.' }, { status: 500 });
    }
}