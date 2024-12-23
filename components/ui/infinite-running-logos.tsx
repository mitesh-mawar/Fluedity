"use client";

import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteRunningLogos = ({
  logos,
  direction,
  speed,
  className,
  pauseOnHover,
}: {
  logos: {
    src: string;
    title: string;
    className?: string;
  }[];
  direction?: string;
  speed?: string;
  className?: string;
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4  w-max flex-nowrap items-center ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
          className
        )}
      >
        {logos.map((logo, idx) => (
          <li className=" max-w-full  relative rounded-md px-2 py-3" key={idx}>
            <Image
              src={logo.src}
              alt={logo.title}
              width={50}
              height={50}
              className={cn(" w-10 h-10 rounded-md", logo.className)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
