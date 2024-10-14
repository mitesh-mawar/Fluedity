import React from "react";
import Image from "next/image";
import HeroSection from "@/components/landing-page/hero-section";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import DetailsSection from "@/components/landing-page/detail-section";
// import ParagraphSection from "@/components/landing-page/paragraph-section";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md">
        <nav className="max-w-[1500px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                className="rounded-full w-8 h-8"
                src="/quampi/logo.png"
                alt="Quampi logo"
              />
              <h1 className="text-lg md:text-xl font-medium">Quampi</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle variant="default" className="h-8 w-8" />
              <Button className="h-8 font-light">Sign up</Button>
            </div>
          </div>
        </nav>
      </header>
      {/* Main content */}
      <main className="flex-grow w-full max-w-[1100px] px-4 mt-20">
        <HeroSection />
        <div className="md:h-12 flex" />
        <DetailsSection />
        <div className="md:h-12 flex" />
        {/* <ParagraphSection /> */}
      </main>
    </div>
  );
};

export default Welcome;
