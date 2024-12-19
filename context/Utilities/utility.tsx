"use client";

import { LandingPageNavbarDataProps } from "@/types/Utilities/Navbar/navbar";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface UtilityContextType {
  isMobile: boolean;
  landingPageNavbarData: LandingPageNavbarDataProps | undefined;
  setLandingPageNavbarData: React.Dispatch<
    React.SetStateAction<LandingPageNavbarDataProps | undefined>
  >;
}

interface UtilityContextProps {
  children: ReactNode;
}

const UtilityContext = createContext<UtilityContextType | undefined>(undefined);

export const UtilityContextProvider: React.FC<UtilityContextProps> = ({
  children,
}) => {
  // ! Use States
  const [landingPageNavbarData, setLandingPageNavbarData] = useState<
    LandingPageNavbarDataProps | undefined
  >(undefined);

  // ! Use Contexts
  const isMobile = useMediaQuery("(max-width: 768px)");

  const value = {
    isMobile,
    landingPageNavbarData,
    setLandingPageNavbarData,
  };

  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};

export const useUtilities = () => {
  const context = useContext(UtilityContext);
  if (!context) {
    throw new Error("Utility Context isn't mounted");
  }
  return context;
};
