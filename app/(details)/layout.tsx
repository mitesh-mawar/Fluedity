"use client";

import LandingPageNavbar from "@/components/landing-page/ui/Navbar/navbar";
import { useUser } from "@/context/User-Data/authentication";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Lenis from "lenis";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  // ! Use Context
  const { user, loading } = useUser();
  const router = useRouter();

  // ! Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden items-center">
        {/* Navbar */}
        <LandingPageNavbar />
        <div className="h-14 flex" />
        {/* Main content */}
        <main className="flex-grow w-full px-4">{children}</main>
      </div>
    </>
  );
};

export default OnboardingLayout;
