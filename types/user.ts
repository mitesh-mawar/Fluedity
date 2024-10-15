import { Timestamp } from "firebase/firestore";


export interface UserDataProps {
    createdAt: Timestamp;
    name: string;
    websites: string[];
    team: string[];
}
