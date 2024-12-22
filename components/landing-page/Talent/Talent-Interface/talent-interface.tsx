"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { MotionConfig, motion } from "framer-motion";
import { Earth, Pencil, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const TalentInterface: React.FC<PropType> = (props) => {
  // ! Function
  const Slide1 = () => {
    const slide1_features = [
      {
        icon: (
          <>
            <div className="w-[37%] relative h-full">
              <Image
                layout="fill"
                className="  rounded-[25px] scale-125"
                objectFit="cover"
                alt="1"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2FJWST.png?alt=media&token=8db9fc66-03f5-4f99-9d20-32a069cb3cbe"
                }
              />
            </div>
          </>
        ),
        heading: "Creating the future",
        sub_heading:
          "For us, for all. Making the future bigger, brighter and safer together.",
        className:
          "gap-5 bg-black text-white shadow-md overflow-hidden rounded-[25px] items-start  backdrop-blur-md flex flex-auto w-full",
        bottom_style: (
          <>
            <div className="mt-3 flex gap-2">
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
            </div>
          </>
        ),
      },
      {
        icon: (
          <>
            <div className="w-[37%] relative h-full">
              <Image
                layout="fill"
                className="  rounded-[25px] scale-125"
                objectFit="cover"
                alt="1"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2FEarth.png?alt=media&token=4d552b87-9081-462a-849e-207a26205d79"
                }
              />
            </div>
          </>
        ),
        heading: "Around the globe",
        sub_heading:
          "Its our priority to create for everyone, to keep everyone together.",
        className:
          "gap-5 bg-[#FAFAFA] text-black shadow-md overflow-hidden rounded-[25px] items-start  backdrop-blur-md flex flex-auto w-full",
        bottom_style: (
          <>
            <div className="mt-3 flex gap-2">
              <Earth className="text-black   " />
            </div>
          </>
        ),
      },
    ];

    return (
      <div className="lg:max-w-[450px] xl:max-w-[750px] p-2 my-2 relative rounded-[25px] lg:min-w-[450px flex flex-auto items-center justify-center">
        <div className="w-full gap-4 h-full p-5 grid grid-rows-3 ">
          {slide1_features.map((feature, index) => (
            <div
              key={index}
              className={cn("flex cursor-pointer flex-auto w-full h-full")}
            >
              <motion.div
                initial={{ y: 20, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0.5 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                className={feature.className}
              >
                {feature.icon}
                <div className="flex p-5  flex-col text-start justify-start">
                  <h1 className="text-2xl">{feature.heading}</h1>
                  <span className="text-base text-[#6E6E73]">
                    {feature.sub_heading}
                  </span>
                  {feature.bottom_style}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex relative overflow-x-clip flex-auto w-full flex-col">
      <div className="flex items-center justify-center text-6xl font-semibold rounded-3xl  ">
        <Slide1 />
      </div>
    </div>
  );
};
