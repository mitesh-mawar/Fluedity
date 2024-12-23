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
        "typography-overview-section-copy", "lg:max-w-[700px]",
        className
      )}
    >
      {text}
    </h1>
  );
};
