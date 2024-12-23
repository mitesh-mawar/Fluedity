"use client";

import { Heading } from "@/components/ui/heading";
import { Spacer } from "@/components/ui/spacer";
import { SubHeading } from "@/components/ui/sub-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const TalentSection2 = () => {
  const sectionRef = useRef(null);

  // Create scroll-triggered animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scrollYProgress to opacity and scale
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const imageCornerRadius = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ y: 50, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, type: "spring" }}
      className="flex flex-auto w-full flex-col gap-8 relative min-h-screen"
    >
      <div className="w-full px-[25px] flex justify-center">
        <div className="w-full max-w-[1100px] flex-col md:items-center flex flex-auto justify-start">
          <div className="md:text-center typography-overview-section-headline">
            Why Fluedity?
          </div>
          <Spacer y={15} />
          <p className="typography-overview-section-copy max-w-[750px] mt-2 md:text-center">
            {`Working at Fluedity means being part 
              of a company that is not only transforming 
              the tech landscape but is also committed to 
              making a meaningful impact on the world. 
              At Fluedity, you will work with cutting-edge 
              technologies in a collaborative environment 
              where creativity is celebrated and innovation 
              is at the forefront.`}
          </p>
        </div>
      </div>

      {/* Animated image container */}
      <motion.div
        className="relative overflow-hidden w-full h-[1000px] flex flex-col items-center"
        style={{
          opacity: imageOpacity,
          borderRadius: imageCornerRadius,
          scale: imageScale,
        }}
      >
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/65c934214299523.6755efe4d5f0b.png"
          alt="Rocket"
          layout="fill"
          className=""
          objectFit="cover"
        />
        <motion.div className="absolute-center bg-black italic  typography-overview-section-headline text-white text-black-shadow font-bold ">
          B&apos;coz We Solve
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
