"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const FourSectionPage = () => {
  const { scrollYProgress } = useScroll();

  // Use the scrollYProgress value to control the transition of each section
  const section1Opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);
  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const section4Opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <>
      <div className="">
        {" "}
        <motion.section
          className="h-screen flex justify-center relative items-center text-black"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section1Opacity }}
        >
          {" "}
          <div className=" h-full w-full  md:mb-[84px] flex flex-auto items-center justify-center">
            <div className=" h-[60%]  justify-center relative  items-center grid grid-cols-2 bg-[#FAFAFC] w-full rounded-[25px] md:rounded-[50px] ">
              <div className="flex p-5 flex-auto w-full h-full items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">Security</h1>
                </div>
              </div>
              <div className="rounded-[25px]  md:rounded-[50px]  flex flex-auto w-full h-full items-start justify-start">
                <video
                  style={{ mixBlendMode: "darken" }}
                  className=" object-cover  w-full h-full rounded-[25px]  md:rounded-[50px]  "
                  muted
                  autoPlay
                  loop
                  playsInline
                  src="https://cdn.dribbble.com/userupload/5835232/file/original-5f526af73413d254a830d68959a0e3fb.mp4"
                />
              </div>
            </div>
          </div>
        </motion.section>{" "}
        <motion.section
          className="h-screen flex justify-center relative items-center text-black "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section2Opacity }}
        >
          <div className=" h-full w-full flex flex-auto items-center justify-center">
            <div className=" h-[60%]  justify-center relative  items-center grid grid-cols-2 bg-[#FAFAFC] w-full rounded-[25px] md:rounded-[50px] ">
              <div className="flex p-5 flex-auto w-full h-full items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">
                    Sustainability
                  </h1>
                </div>
              </div>
              <div className=" relative rounded-r-[25px] overflow-hidden  md:rounded-r-[50px] items-center flex flex-auto w-full h-full justify-center">
                <Image
                  alt="Earth"
                  layout="fill"
                  objectFit="cover"
                  className=" rounded-r-[25px] md:rounded-r-[50px] md:mt-20 md:ml-20 scale-125"
                  src="https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2FEarth.png?alt=media&token=4d552b87-9081-462a-849e-207a26205d79"
                />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="h-screen flex justify-center relative items-center text-black "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section3Opacity }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-[600px] w-full max-w-6xl grid grid-cols-5 bg-[#FAFAFC] rounded-[25px] md:rounded-[50px] overflow-hidden">
              {/* Text Column */}
              <div className="flex p-5 flex-auto w-full h-full col-span-2 items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">Reliability</h1>
                </div>
              </div>

              {/* Image Column */}
              <div className=" relative rounded-r-[25px] col-span-3 overflow-hidden md:rounded-r-[50px] items-center flex flex-auto w-full h-full justify-center">
                <Image
                  alt="Earth"
                  layout="fill"
                  objectFit="cover"
                  className=" rounded-r-[25px] md:rounded-r-[50px] md:mt-20 "
                  src="https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2Fheart-sketch.png?alt=media&token=4db0bfb3-110c-4183-82b8-3f6b3351b5a1"
                />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="h-screen flex justify-center relative items-center text-black "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section4Opacity }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-[600px] w-full max-w-6xl grid grid-cols-5 bg-[#FAFAFC] rounded-[25px] md:rounded-[50px] overflow-hidden">
              {/* Text Column */}
              <div className="flex p-5 flex-auto w-full h-full col-span-2 items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">Innovation</h1>
                </div>
              </div>

              {/* Image Column */}

              <div className=" relative rounded-r-[25px] ml-auto col-span-3 rotate-[-20deg] overflow-hidden md:rounded-r-[50px] items-center flex  justify-center">
                <Image
                  alt="Bulb"
                  width={9999999}
                  height={9999999}
                  className=" rounded-r-[25px] md:rounded-r-[50px] w-32 md:w-[250px] lg:w-[400px] scale-110"
                  src="https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2Fbulbs.png?alt=media&token=af46cb2c-b8e2-47a6-85cf-3d7d5ac6f9e5"
                />{" "}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default FourSectionPage;
