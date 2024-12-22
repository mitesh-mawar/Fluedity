import { cn } from "@/lib/utils";
import React from "react";

export const Spacer = ({ y, x }: { y?: number; x?: number }) => {
  return (
    <div
      className={cn(y && " flex w-full ")}
      style={{ height: y && `${y}px`, width: x && `${x}px` }}
    />
  );
};
