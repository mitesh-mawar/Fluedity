"use client";

import LoadingScreen from "@/components/loading-screens/main-loading-screen";
import { useUser } from "@/context/authentication";
import { useRouter } from "next/navigation";
import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  // ! Use Context
  const { user, loading } = useUser();
  const router = useRouter();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user && !loading) {
    return router.push("/home");
  }

  return <>{children}</>;
};

export default AuthenticationLayout;
