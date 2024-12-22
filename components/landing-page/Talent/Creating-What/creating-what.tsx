"use client";

import { Heading } from "@/components/ui/heading";
import { Spacer } from "@/components/ui/spacer";
import { SubHeading } from "@/components/ui/sub-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const CreatingWhat = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, type: "spring" }}
      className="flex flex-auto w-full flex-col gap-8"
    >
      <div className="w-full px-[25px] flex justify-center">
        <div className="w-full max-w-[1100px] flex-col items-start flex flex-auto justify-start">
          <Heading text={"Creating What?"} />
          <SubHeading
            text={`Creating a better future in which 
                   productivity, safety, riability and 
                   use of technology are as efficient as 
                   possible. Eliminating carbon emissions
                   and bringing human safety to the top again.`}
          />
        </div>
      </div>
      <Spacer y={20} />
      <div className="w-full h-[400px] md:h-[1000px] relative">
        <Image
          src={
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c84402196430599.661fc46a3b2b8.png"
          }
          fill
          alt="Sustainability"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
        />
        <h1 className="flex  py-2 text-white absolute z-[10] top-1/2 left-1/2 translate-x-[-50%] font-bold translate-y-[-50%] text-xl md:text-2xl lg:text-6xl xl:text-8xl flex-auto">
          {" "}
          And, <br />
          Happy Vibe
        </h1>
      </div>
    </motion.div>
  );
};
