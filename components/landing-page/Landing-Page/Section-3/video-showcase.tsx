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
  const [ShowDesign, setShowDesign] = useState(false);
  const [ShowOffice, setShowOffice] = useState(false);

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
              className={`typography-product-stories-headline  pb-2 md:text-center`}
            >
              For You. <br /> And your daily stuff.
            </motion.h1>
            <span className="max-w-[400px] md:text-center mt-3 text-black typography-overview-section-copy ">
              Made to take on your work load, let you do a{" "}
              <strong
                className="font-semibold text-primary pb-1"
                style={{ color: "primary" }}
              >
                billion
              </strong>{" "}
              queries per day.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={50} />
      <div className="flex flex-auto w-full justify-center items-center">
        <div className=" graphic-center-div flex flex-col gap-5">
          <div className="flex relative overflow-hidden flex-auto w-full card tile-rounded  bg-[#FDEAEE] aspect-video ">
            <div className="flex flex-auto flex-col w-full justify-center text-center items-center">
              <motion.div
                className={cn(
                  `absolute flex overflow-hidden flex-col items-center left-1/2 
                    z-10 -translate-x-1/2  cursor-pointer px-10 py-3 bottom-0
                     my-10 rounded-full lg:text-xl
                ${ShowStem ? "bg-primary" : "bg-primary/90"}`,
                  isMobile && "my-0 w-full  flex flex-auto px-5 text-[14px]"
                )}
                onClick={() => setShowStem(!ShowStem)}
                animate={{
                  width: ShowStem ? "auto" : "auto",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h1
                  className="text-white font-semibold"
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
          <div className=" w-full grid md:grid-cols-2 gap-5">
            <div className="flex relative card tile-rounded  overflow-hidden flex-auto w-full   bg-[#FDEAEE] aspect-video ">
              <motion.div
                className={cn(
                  `absolute flex overflow-hidden flex-col items-center left-1/2 
                    z-10 -translate-x-1/2  cursor-pointer px-7 py-2 bottom-0
                     my-5 rounded-full lg:text-lg
                ${ShowDesign ? "bg-primary" : "bg-primary/90"}`,
                  isMobile && "my-0 w-full flex flex-auto px-5 text-[14px]"
                )}
                onClick={() => setShowDesign(!ShowDesign)}
                animate={{
                  width: ShowDesign ? "auto" : "auto",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h1
                  className="text-white font-semibold"
                  animate={{
                    scale: !isMobile ? (ShowDesign ? 1.1 : 1) : 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  Design
                </motion.h1>

                <motion.span
                  className="text-[12px] text-center md:text-sm mt-1 md:mt-3 w-[350px] md:max-w-[450px] text-white"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{
                    opacity: ShowDesign ? 1 : 0,
                    height: ShowDesign ? "auto" : 0,
                    width: !isMobile ? (ShowDesign ? "auto" : 0) : "350px",
                    marginTop: ShowDesign ? 5 : 0,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                >
                  With text based image and video search, extract from millions
                  of videos, images and 3d arts.
                </motion.span>
              </motion.div>
              <Image
                layout="fill"
                className=""
                objectFit="cover"
                alt="Design"
                src={
                  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/73aa87210066323.670aa903926e5.jpg"
                }
              />
            </div>
            <div className="flex relative aspect-video card tile-rounded  overflow-hidden flex-auto w-full   bg-[#FDEAEE] ">
              <motion.div
                className={cn(
                  `absolute flex overflow-hidden flex-col items-center left-1/2 
                    z-10 -translate-x-1/2  cursor-pointer px-7 py-2 bottom-0
                     my-5 rounded-full lg:text-lg
                ${ShowOffice ? "bg-primary" : "bg-primary/90"}`,
                  isMobile && "my-0 w-full flex flex-auto px-5 text-[14px]"
                )}
                onClick={() => setShowOffice(!ShowOffice)}
                animate={{
                  width: ShowOffice ? "auto" : "auto",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h1
                  className="text-white font-semibold"
                  animate={{
                    scale: !isMobile ? (ShowOffice ? 1.1 : 1) : 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  Office
                </motion.h1>

                <motion.span
                  className="text-[12px] text-center md:text-sm mt-1 md:mt-3 w-[350px] md:max-w-[350px] text-white"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{
                    opacity: ShowOffice ? 1 : 0,
                    height: ShowOffice ? "auto" : 0,
                    width: !isMobile ? (ShowOffice ? "auto" : 0) : "300px",
                    marginTop: ShowOffice ? 5 : 0,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                >
                  Elevate Cognition Intelligence features to manage and automate
                  your office work.
                </motion.span>
              </motion.div>
              <Image
                layout="fill"
                className=""
                objectFit="cover"
                alt="Design"
                src={
                  "https://cdn.dribbble.com/userupload/8191702/file/original-e08e6815cc94344ae2f62b9040d4f2a9.png?resize=752x&vertical=center"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Spacer y={isMobile ? 45 : 70} />
      <div className="flex w-full flex-auto md:justify-center">
        <div className=" padding-axe typography-overview-section-copy max-w-[550px] md:text-center">
          Enables users worldwide to work on shared projects with synchronized
          AI-powered inputs.
        </div>
      </div>{" "}
      <Spacer y={isMobile ? 100 : 200} />
    </motion.div>
  );
};

export default LPSection3;
