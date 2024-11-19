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
          className="h-screen flex justify-center relative items-center text-white "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section1Opacity }}
        >
          {" "}
          <div className=" h-full w-full  md:mb-[84px] flex flex-auto items-center justify-center">
            <div className=" h-[60%]  justify-center relative  items-center grid grid-cols-2 bg-primary w-full rounded-[25px] md:rounded-[50px] ">
              <div className="flex p-5 flex-auto w-full h-full items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">Security</h1>
                </div>
              </div>
              <div className="rounded-[25px]  md:rounded-[50px]  flex flex-auto w-full h-full items-start justify-start">
                <video
                  style={{ mixBlendMode: "screen" }}
                  className=" object-cover  w-full h-full "
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
          className="h-screen flex justify-center relative items-center text-white "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section2Opacity }}
        >
          <div className=" h-full w-full flex flex-auto items-center justify-center">
            <div className=" h-[60%] text-black   justify-center relative  items-center grid grid-cols-2 bg-[#FAFAFC] w-full rounded-[25px] md:rounded-[50px] ">
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
          <div className=" h-full w-full   flex flex-auto items-center justify-center">
            <div className=" h-[60%]  justify-center relative  items-center grid grid-cols-2 bg-[#FAFAFC] w-full rounded-[25px] md:rounded-[50px] ">
              <div className="flex p-5 flex-auto w-full h-full items-start justify-end">
                <div className="  p-5 pt-0 ">
                  <h1 className="flex text-5xl font-semibold text-end  w-full ml-auto">
                    Reliablity
                  </h1>
                </div>
              </div>
              <div className="relative w-full h-64 md:h-96 scale-x-[-1] rounded-r-[25px] md:rounded-r-[50px] overflow-hidden">
                <Image
                  alt="Gears"
                  src="https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Previews%2FImages%2Ftouching-3259573_1280.webp?alt=media&token=7767d856-ebc2-447e-8ba1-67cfb11990fc"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-r-[25px] md:rounded-r-[50px] "
                />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="h-screen flex justify-center relative items-center text-white "
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ opacity: section4Opacity }}
        >
          <div className=" h-full w-full  flex flex-auto items-center justify-center">
            <div className=" h-[60%]  justify-center relative  items-center grid grid-cols-2 bg-[#FF0D0F] w-full rounded-[25px] md:rounded-[50px] ">
              <div className="flex p-5 flex-auto w-full h-full items-start justify-start">
                <div className="  p-5">
                  <h1 className="flex text-5xl font-semibold ">Innovation</h1>
                </div>
              </div>
              <div className="rounded-[25px]  md:rounded-[50px]  flex flex-auto w-full h-full items-start justify-start">
                <video
                  style={{ mixBlendMode: "screen" }}
                  className=" object-cover  w-full h-full "
                  muted
                  autoPlay
                  loop
                  playsInline
                  src="https://cdn.dribbble.com/userupload/5835232/file/original-5f526af73413d254a830d68959a0e3fb.mp4"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default FourSectionPage;
