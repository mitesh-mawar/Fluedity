import { cn } from "@/lib/utils";
import React from "react";

export const SubHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-[19px] px-1 max-w-[700px] text-start text-[#6E6E73] md:text-[22px] font-bold",
        className
      )}
    >
      {text}
    </h1>
  );
};
