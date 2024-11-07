"use client";

import React from "react";
import HeroSection from "@/components/landing-page/hero-section";
import { useRouter } from "next/navigation";
import LandingPageNavbar from "@/components/landing-page/navbar";
import { useUser } from "@/context/authentication";
import LoadingScreen from "@/components/loading-screens/main-loading-screen";
import { easeInOut, motion } from "framer-motion";
// import ParagraphSection from "@/components/landing-page/paragraph-section";

const Welcome = () => {
  // ! Use Context
  const { user, loading } = useUser();
  const router = useRouter();

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
      </main>
    </div>
  );
};

export default Welcome;
