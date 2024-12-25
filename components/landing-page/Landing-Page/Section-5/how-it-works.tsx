import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";
import Image from "next/image";
import { Search, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const LPSection5 = () => {
  const { isMobile } = useUtilities();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const waveVariants1 = {
    animate: {
      borderRadius: [
        "60% 80% 30% 70%/80% 30% 70% 70%",
        "30% 60% 70% 40%/50% 60% 40% 60%",
        "60% 80% 30% 70%/80% 30% 70% 70%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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
      className="relative w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Data from, <br /> Anywhere. Any medium.
            </motion.h1>
            <span className="max-w-[700px] md:text-center mt-3 text-black typography-overview-section-copy">
              Seamlessly gather, analyze, and utilize information from any
              medium. Whether sourced from text, audio, website, video, or
              real-time data streams, Fluedity Cognition Intelligence delivers
              unparalleled efficiency and adaptability for every user.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 50 : 80} />
      <div
        className={` graphic-center-div grid gap-5 md:grid-cols-2 w-full relative ${
          isMobile ? " " : " "
        }`}
      >
        <motion.div className="p-5 md:p-10 relative flex-col overflow-hidden card tile-rounded bg-[#FFF0E9] w-full flex flex-auto aspect-[9/11]">
          <motion.div animate="animate" className="z-10  ">
            <h1
              className=" typography-custom-section-headline"
              style={{ color: "#E25C20" }}
            >
              Latest data. Anytime.
            </h1>
          </motion.div>
          <motion.div
            animate="animate"
            className="relative gap-5 flex flex-col  w-full h-full "
          >
            <motion.div
              animate="animate"
              className="absolute bottom-0  bg-white w-full flex flex-auto rounded-full border-2 h-14"
            >
              <Input
                maxLength={isMobile ? 30 : 60}
                className=" flex flex-auto focus-visible:ring-0 focus:outline-0 text-black/50 text-start px-5 items-center font-semibold text-lg h-full ring-0 outline-none border-0 "
                placeholder="Search anything..."
              />
              <SearchIcon className="w-10 cursor-pointer transition hover:p-[10px] h-10 p-3 items-center my-auto mr-[8px] text-[#E25C20] rounded-full bg-[#FFF0E9]" />
            </motion.div>
            <motion.div
              animate="animate"
              className="ml-2 mt-16 bg-[#E25C20]/50 w-[50%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className=" ml-2  bg-[#E25C20]/50 w-[70%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className=" ml-2  bg-[#E25C20]/50 w-[80%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className=" ml-2  bg-[#E25C20]/50 w-[55%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[40%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[60%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[90%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[90%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[40%] flex rounded-full  h-6"
            />
            <motion.div
              animate="animate"
              className="  ml-2 bg-[#E25C20]/50 w-[30%] flex rounded-full  h-6"
            />
          </motion.div>
        </motion.div>
        <motion.div className="p-5 md:p-10 relative flex-col overflow-hidden card tile-rounded bg-[#FCF9E6] w-full flex flex-auto aspect-[9/11]">
          <motion.div animate="animate" className="z-10  ">
            <h1
              className=" typography-custom-section-headline"
              style={{ color: "#F2A942" }}
            >
              Any Source. <br className="xl:flex hidden" />
              Any Medium.
            </h1>
          </motion.div>
          <motion.div
            animate="animate"
            className="relative gap-5 flex flex-col my-10 w-full h-full "
          >
            <motion.div
              variants={waveVariants1}
              className="w-[150px] transition cursor-pointer hover:scale-105 absolute top-1/2 left-[10%] aspect-square flex justify-center items-center bg-[#F2A942]/50 rounded-t-full"
            >
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#F2A942" }}
              >{`</>`}</h1>
            </motion.div>
            <motion.div
              variants={waveVariants1}
              className="w-[150px] transition cursor-pointer hover:scale-105  absolute top-10 right-1/2  aspect-square flex justify-center items-center bg-[#F2A942]/50 rounded-t-full"
            >
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#F2A942" }}
              >{`.img`}</h1>
            </motion.div>
            <motion.div
              variants={waveVariants1}
              className="w-[150px] transition cursor-pointer hover:scale-105  absolute bottom-0 right-1/4  aspect-square flex justify-center items-center bg-[#F2A942]/50 rounded-t-full"
            >
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#F2A942" }}
              >{`.web`}</h1>
            </motion.div>
            <motion.div
              variants={waveVariants1}
              className="w-[150px] transition cursor-pointer hover:scale-105  absolute top-1/2 translate-y-[-60%] right-[10%]  aspect-square flex justify-center items-center bg-[#F2A942]/50 rounded-t-full"
            >
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#F2A942" }}
              >{`.txt`}</h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Spacer y={isMobile ? 100 : 200} />
    </motion.div>
  );
};

export default LPSection5;
