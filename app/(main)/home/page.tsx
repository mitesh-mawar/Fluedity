"use client";

import WebsiteCard from "@/components/analytics/website-card";
import WebsiteGeneralDetails from "@/components/analytics/website-generel-details";
import LoadingScreen from "@/components/loading-screens/main-loading-screen";
import { useWebsiteData } from "@/context/website-data";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  // ! Use Context
  const { myWebsites, activeWebsite, liveActiveWebsiteData, loading } =
    useWebsiteData();
  const router = useRouter();

  if (loading) {
    // Loading
  }

  if (liveActiveWebsiteData) {
    return (
      <div className=" py-5 px-4 w-full flex justify-center flex-auto">
        <div className=" max-w-[1200px] w-full gap-2 md:gap-5 grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <WebsiteCard
              domain={liveActiveWebsiteData?.domain}
              title={liveActiveWebsiteData.title}
              description={liveActiveWebsiteData.description}
              favicon={liveActiveWebsiteData.favicon}
              loadTime={liveActiveWebsiteData.performanceMetrics.loadTime}
              firstContentfulPaint={
                liveActiveWebsiteData.performanceMetrics.firstContentfulPaint
              }
              largestContentfulPaint={
                liveActiveWebsiteData.performanceMetrics.largestContentfulPaint
              }
            />
          </div>{" "}
          <div>
            <WebsiteGeneralDetails
              facebook={liveActiveWebsiteData.socialMediaLinks.facebook}
              twitter={liveActiveWebsiteData.socialMediaLinks.twitter}
              linkedin={liveActiveWebsiteData.socialMediaLinks.linkedin}
              instagram={liveActiveWebsiteData.socialMediaLinks.instagram}
              keywords={liveActiveWebsiteData.keywords}
              lastUpdated={liveActiveWebsiteData.lastUpdated}
              language={liveActiveWebsiteData.language}
              author={liveActiveWebsiteData.author}
              contentType={liveActiveWebsiteData.contentType}
              robots={liveActiveWebsiteData.robots}
              canonical={liveActiveWebsiteData.canonical}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
