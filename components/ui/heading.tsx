import { cn } from "@/lib/utils";
import React from "react";

export const Heading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-[40px] md:text-[50px] lg:text-[70px] font-bold text-center",
        className
      )}
    >
      {text}
    </h1>
  );
};
