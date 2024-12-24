import { Spacer } from "@/components/ui/spacer";
import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Card } from "@/components/ui/card-carousel";
import { useUtilities } from "@/context/Utilities/utility";
import { CTAText } from "@/components/ui/cta-text";
import Image from "next/image";
import { shakeElement } from "@/animations/click-animations/jiggle";
import { cn } from "@/lib/utils";

const LPSection3 = () => {
  // ! Use State
  const [ShowStem, setShowStem] = useState(false);

  // ! Use Context
  const { isMobile } = useUtilities();

  // ! Use Ref
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        ease: "easeInOut",
      }}
      ref={sectionRef}
      className="relative  w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col  w-full md:items-center">
            <motion.h1
              className={`typography-custom-section-headline pb-2 md:text-center`}
            >
              Use it for your daily stuff
            </motion.h1>
            <span className="max-w-[400px] md:text-center mt-3 text-black md:text-lg">
              Made to take on your work load, let you do a{" "}
              <strong className="font-semibold text-primary">BILLION</strong>{" "}
              queries per day.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={50} />
      <div className="flex flex-auto w-full justify-center items-center">
        <div className=" graphic-center-div grid md:grid-rows-2 gap-5">
          <div className="flex relative overflow-hidden flex-auto w-full card tile-rounded  bg-[#FDEAEE] aspect-video ">
            <div className="flex flex-auto flex-col w-full justify-center text-center items-center">
              <motion.div
                className={cn(
                  `absolute flex overflow-hidden flex-col items-center left-1/2 
                    z-10 -translate-x-1/2  cursor-pointer px-10 py-3 bottom-0
                     my-10 rounded-full lg:text-xl
                ${ShowStem ? "bg-primary" : "bg-primary/90"}`,
                  isMobile &&
                    "my-0 w-full translate-y-[10px] scale-50 flex flex-auto px-5 text-[14px]"
                )}
                onClick={() => setShowStem(!ShowStem)}
                animate={{
                  width: ShowStem ? "auto" : "auto",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h1
                  className="text-white"
                  animate={{
                    scale: !isMobile ? (ShowStem ? 1.1 : 1) : 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  STEM
                </motion.h1>

                <motion.span
                  className="text-[12px] md:text-sm mt-1 md:mt-3 w-[250px] md:max-w-[350px] text-white"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{
                    opacity: ShowStem ? 1 : 0,
                    height: ShowStem ? "auto" : 0,
                    width: !isMobile ? (ShowStem ? "auto" : 0) : "300px",
                    marginTop: ShowStem ? 5 : 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  With data searching, sorting, filtering algorithms you will
                  get the best out of your time.
                </motion.span>
              </motion.div>
            </div>
            <video
              muted
              loop
              playsInline
              autoPlay
              className=" object-cover w-full h-full "
              src={
                "https://cdn.dribbble.com/userupload/6419682/file/original-2ee275eeb5583eb04f8281ac02b928f2.mp4"
              }
            />
          </div>
          <div className=" w-full grid grid-cols-3">
            <div className="flex overflow-hidden flex-auto w-full rounded-[50px]  bg-[#FDEAEE] aspect-square ">
              <div className="flex flex-auto w-full justify-center text-center items-center">
                <h1 className="typography-overview-section-headline  text-[#DE5D7D]">
                  Content
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={100} />
    </motion.div>
  );
};

export default LPSection3;
