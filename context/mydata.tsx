"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { SubscriptionDataProps } from "@/types/subscription";
import { UserDataProps } from "@/types/user";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, DB } from "@/config/firebase-config";

export interface MyDataProps {
  myData: UserDataProps | undefined;
  loading: boolean;
  mySubscriptionData: SubscriptionDataProps | undefined;
  subscriptionLoading: boolean;
}

interface MyDataProviderProps {
  children: ReactNode;
}

const MyDataContext = createContext<MyDataProps | undefined>(undefined);

export const MyDataProvider: React.FC<MyDataProviderProps> = ({ children }) => {
  // ! Use States
  const [myData, setMyData] = useState<UserDataProps>();
  const [loading, setLoading] = useState(true);
  const [mySubscriptionData, setMySubscriptionData] =
    useState<SubscriptionDataProps>();
  const [subscriptionLoading, setSubscriptionLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(DB, "Users", user.uid);
        await onSnapshot(docRef, (snapshot) => {
          const data = snapshot.data() as UserDataProps;
          if (data != myData) {
            setMyData(data);
          }
        });
        setLoading(false);
      } else {
        setMyData(undefined);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(DB, "Subscription", user.uid);
        await onSnapshot(docRef, (snapshot) => {
          const data = snapshot.data() as SubscriptionDataProps;
          if (data != mySubscriptionData) {
            setMySubscriptionData(data);
          }
        });
        setSubscriptionLoading(false);
      } else {
        setMySubscriptionData(undefined);
        setSubscriptionLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ! Values
  const value = { myData, loading, mySubscriptionData, subscriptionLoading };

  return (
    <MyDataContext.Provider value={value}>{children}</MyDataContext.Provider>
  );
};

export const useMyData = () => {
  const context = useContext(MyDataContext);
  if (!context) {
    throw new Error("Context isn't mounted");
  }
  return context;
};
