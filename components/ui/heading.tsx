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
        "typography-overview-section-headline",
        className
      )}
    >
      {text}
    </h1>
  );
};
