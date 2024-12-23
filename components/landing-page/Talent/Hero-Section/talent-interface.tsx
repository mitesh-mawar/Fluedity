"use client";

import React from "react";
import { motion } from "framer-motion";
import { Earth, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BiPlanet } from "react-icons/bi";
import { useUtilities } from "@/context/Utilities/utility";

const features = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2FJWST.png?alt=media&token=8db9fc66-03f5-4f99-9d20-32a069cb3cbe",
    heading: "Creating the future",
    subHeading:
      "For us, for all. Making the future bigger, brighter and safer together.",
    bgClass: "bg-black text-white",
    bottomElement: (
      <div className="mt-3 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
    ),
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2FEarth.png?alt=media&token=4d552b87-9081-462a-849e-207a26205d79",
    heading: "Around the globe",
    subHeading:
      "Its our priority to create for everyone, to keep everyone together.",
    bgClass: "bg-[#FAFAFA] text-black",
    bottomElement: (
      <div className="mt-3 flex gap-2 items-center">
        <Earth className="text-black" />
        <BiPlanet className="text-black w-7 h-7 p-[1px]" />
      </div>
    ),
  },
];

const FeatureCard = ({
  feature,
  index,
  isMobile,
}: {
  feature: any;
  index: number;
  isMobile: boolean;
}) => {
  return (
    <div className="flex cursor-pointer relative h-[220px] max-h-[220px] flex-auto w-full">
      <motion.div
        initial={{ y: 20, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{
          duration: 1.1 + index * 0.2,
          ease: "easeInOut",
          bounce: 0.4,
          type: "spring",
        }}
        className={cn(
          "gap-2 md:gap-7 shadow-md overflow-hidden rounded-[25px] items-start backdrop-blur-md flex flex-auto w-full",
          feature.bgClass,
          isMobile && " flex-col"
        )}
      >
        <div
          className={cn(
            "relative h-full",
            isMobile
              ? "w-full translate-x-[60%]  right-0 absolute top-0 h-full"
              : "md:w-[39%]"
          )}
        >
          <Image
            src={feature.image}
            layout="fill"
            className={cn(
              "rounded-[25px]",
              isMobile ? "  " : "md:scale-125 md:rotate-0"
            )}
            objectFit="cover"
            alt={feature.heading}
          />
        </div>

        <div className="flex p-5 md:max-w-none max-w-[200px] flex-auto h-full flex-col text-start justify-center">
          <h1 className="text-[22px] lg:text-4xl font-semibold mb-2">
            {feature.heading}
          </h1>
          <span className="text-sm md:text-base text-[#6E6E73]">
            {feature.subHeading}
          </span>
          {feature.bottomElement}
        </div>
      </motion.div>
    </div>
  );
};

export const TalentInterface = () => {
  const { isMobile } = useUtilities();

  return (
    <div className="flex relative w-full flex-col">
      <div className="flex items-center justify-center text-6xl font-semibold rounded-3xl">
        <div className="max-w-[750px] w-full md:h-[400px] md:p-2 my-2 relative rounded-[25px] flex flex-auto items-center justify-center">
          <div className="w-full gap-4 h-full flex flex-col items-center md:p-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
