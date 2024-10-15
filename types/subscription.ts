import { Timestamp } from "firebase/firestore";

export interface SubscriptionDataProps {
    user_uid: string;
    plan: "Basic" | "Premium" | "Enterprise" | null;
    status: boolean;
    customerId: string;
    subscriptionId: string;
    planCreatedAt: Timestamp | null;
    planEndingAt: Timestamp | null;
    updatedAt: Timestamp | null;
    cancelAt: Timestamp | null;
    cancelled: boolean;
}