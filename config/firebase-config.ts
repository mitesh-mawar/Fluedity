import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const cloudFunction = getFunctions(app, "asia-south1");
const auth = getAuth(app);
const DB = getFirestore(app);
const FBStorage = getStorage(app);

export { app, auth, DB, FBStorage, cloudFunction };
