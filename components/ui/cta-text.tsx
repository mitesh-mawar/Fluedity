import { ChevronRight } from "lucide-react";
import React from "react";

export const CTAText = ({
  title,
  description,
  href,
  icon,
  different_tab,
}: {
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  different_tab?: boolean;
}) => {
  return (
    <div
      onClick={() => {
        if (typeof window != "undefined") {
          different_tab ? window.open(href, "_blank") : window.open(href);
        }
      }}
      className="flex flex-auto text-center  pt-4 w-full justify-center items-center flex-col"
    >
      <span className=" text-primary transition-all ease-in-out duration-300 hover:text-primary/80 cursor-pointer group flex items-center gap-1">
        <h1>{title}</h1>
        {!icon ? (
          <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-all ease-in-out duration-300" />
        ) : (
          <>{icon}</>
        )}
      </span>
      {description && (
        <span className=" md:text-base text-sm">{description}</span>
      )}
    </div>
  );
};
