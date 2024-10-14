"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface UtilityContextType {
  login: boolean;
  signup: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
  navbarRef: HTMLDivElement | null;
  isMobile: boolean;
  setNavbarRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}

interface UtilityContextProps {
  children: ReactNode;
}

const UtilityContext = createContext<UtilityContextType | undefined>(undefined);

export const UtilityContextProvider: React.FC<UtilityContextProps> = ({
  children,
}) => {
  // ! Use States
  const [login, setLogin] = useState<boolean>(false);
  const [signup, setSignup] = useState<boolean>(false);
  const [navbarRef, setNavbarRef] = useState<HTMLDivElement | null>(null);

  // ! Use Contexts
  const isMobile = useMediaQuery("(max-width: 768px)");

  const value = {
    isMobile,
    navbarRef,
    setNavbarRef,
    login,
    signup,
    setSignup,
    setLogin,
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
