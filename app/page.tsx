"use client";

import React from "react";
import HeroSection from "@/components/landing-page/hero-section";
import { useRouter } from "next/navigation";
import LandingPageNavbar from "@/components/landing-page/navbar";
import { useUser } from "@/context/authentication";
import LoadingScreen from "@/components/loading-screens/main-loading-screen";
// import ParagraphSection from "@/components/landing-page/paragraph-section";

const Welcome = () => {
  // ! Use Context
  const { user, loading } = useUser();
  const router = useRouter();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user && !loading) {
    return router.push("/home");
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <LandingPageNavbar />
      {/* Main content */}
      <main className="flex-grow w-full max-w-[1100px] px-4 ">
        <HeroSection />
      </main>
    </div>
  );
};

export default Welcome;
