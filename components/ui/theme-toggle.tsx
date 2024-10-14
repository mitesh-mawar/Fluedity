"use client";

import * as React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string; // Change the type to string and make it optional
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant, className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      variant={`${variant}`}
      size="icon"
      className={cn("px-1 py-0 w-7 h-7", className)}
    >
      <BiSun className="h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <BiMoon className="absolute p-[2px] h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
