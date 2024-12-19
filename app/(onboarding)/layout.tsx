"use client";

import LoadingScreen from "@/components/loading-screens/Page-Loading-Screen/main-loading-screen";
import { useUser } from "@/context/User-Data/authentication";
import { useRouter } from "next/navigation";
import React from "react";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  // ! Use Context
  const { user, loading } = useUser();
  const router = useRouter();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user && !loading) {
    return router.push("/");
  }

  return <>{children}</>;
};

export default OnboardingLayout;
