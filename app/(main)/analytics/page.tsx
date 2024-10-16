"use client";

import WebsiteCard from "@/components/analytics/website-card";
import WebsiteGeneralDetails from "@/components/analytics/website-generel-details";
import WebsiteVisitorsAnalytics from "@/components/analytics/website-visitors-analytics";
import { DB } from "@/config/firebase-config";
import { useUser } from "@/context/authentication";
import { useWebsiteData } from "@/context/website-data";
import { QuampiWebEvent } from "@/types/website";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Analytics = () => {
  // ! Use Context
  const { myWebsites, activeWebsite, liveActiveWebsiteData, loading } =
    useWebsiteData();
  const { user } = useUser();
  const router = useRouter();
  const currentPath = usePathname();

  // ! Use State
  const [events, setEvents] = useState<QuampiWebEvent[]>([]);

  // ! Use Effect
  useEffect(() => {
    if (user && activeWebsite) {
      const eventCollectionRef = collection(
        DB,
        `Website/${activeWebsite}/Event`
      );

      onSnapshot(
        eventCollectionRef,
        (snapshot) => {
          if (snapshot.empty) {
            return;
          }
          const event_data = snapshot.docs.map((event) => {
            return event.data() as QuampiWebEvent;
          });
          setEvents(
            event_data.sort((a, b) => {
              return (
                (a.timestamp.toMillis() ?? 0) - (b.timestamp.toMillis() ?? 0)
              );
            })
          );
        },
        (error) => {
          setEvents([]);
        }
      );
    }
  }, [user, activeWebsite]);

  if (liveActiveWebsiteData) {
    return (
      <div className=" py-5 px-4 w-full flex justify-center  flex-auto">
        <div className="max-w-[1200px]  w-full gap-2 md:gap-5 ">
          <WebsiteVisitorsAnalytics events={events} />
        </div>
      </div>
    );
  }
};

export default Analytics;
