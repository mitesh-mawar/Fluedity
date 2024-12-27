"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LandingPageNavbar from "@/components/landing-page/ui/Navbar/navbar";
import { useUser } from "@/context/User-Data/authentication";
import LoadingScreen from "@/components/loading-screens/Page-Loading-Screen/main-loading-screen";
import { easeInOut, motion } from "framer-motion";
import HeroSection from "@/components/landing-page/Landing-Page/Hero-Section/hero-section";
import LPSection1 from "@/components/landing-page/Landing-Page/Section-1/cognition-intelligence";
import { Spacer } from "@/components/ui/spacer";
import LPSection2 from "@/components/landing-page/Landing-Page/Section-2/features";
import LPSection3 from "@/components/landing-page/Landing-Page/Section-3/video-showcase";
import LPSection4 from "@/components/landing-page/Landing-Page/Section-4/query-options";
import LPSection5 from "@/components/landing-page/Landing-Page/Section-5/how-it-works";
import LPSection6 from "@/components/landing-page/Landing-Page/Section-6/task";
import LPSection7 from "@/components/landing-page/Landing-Page/Section-7/generation";
import LPSection8 from "@/components/landing-page/Landing-Page/Section-8/companion";
// import ParagraphSection from "@/components/landing-page/paragraph-section";

const Welcome = () => {
  // ! Use Context
  const { user, loading } = useUser();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <motion.div
        className="flex w-full"
        transition={{ duration: 0.4, ease: "linear" }}
      >
        <LandingPageNavbar />
      </motion.div>
      {/* Main content */}
      <div className="flex-grow w-full max-w-[1100px] px-[22px] lg:px-0 ">
        <HeroSection />
      </div>
      <Spacer y={150} />
      <div className="flex flex-auto flex-col items-center w-full">
        <LPSection1 />
        <LPSection2 />
        <LPSection3 />
        <LPSection4 />
        <LPSection5 />
        <LPSection6 />
        <LPSection7 />
        <LPSection8 />
      </div>
    </div>
  );
};

export default Welcome;
