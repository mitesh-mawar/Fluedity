"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LandingPageNavbar from "@/components/landing-page/ui/Navbar/navbar";
import { useUser } from "@/context/User-Data/authentication";
import LoadingScreen from "@/components/loading-screens/Page-Loading-Screen/main-loading-screen";
import { easeInOut, motion } from "framer-motion";
import HeroSection from "@/components/landing-page/Landing-Page/Hero-Section/hero-section";
import LPSection1 from "@/components/landing-page/Landing-Page/Section-1/cognition-intelligence";
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
      <main className="flex-grow w-full max-w-[1100px] px-4 ">
        <HeroSection />
        <LPSection1 />
      </main>
    </div>
  );
};

export default Welcome;
