import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";

const LPSection4 = () => {
  const waveVariants1 = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70%/60% 30% 70% 40%",
        "30% 60% 70% 40%/50% 60% 40% 60%",
        "60% 40% 30% 70%/60% 30% 70% 40%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const waveVariants2 = {
    animate: {
      borderRadius: [
        "30% 60% 70% 40%/50% 60% 40% 60%",
        "60% 40% 30% 70%/60% 30% 70% 40%",
        "30% 60% 70% 40%/50% 60% 40% 60%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const { isMobile } = useUtilities();
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
      className="relative w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Query, <br /> And see the rest.
            </motion.h1>
            <span className="max-w-[700px] md:text-center mt-3 text-black typography-overview-section-copy">
              Intelligent text, image and video search can get you the most
              relevant information from anywhere on the internet within seconds.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 50 : 120} />
      <div
        className={`flex graphic-center-div flex-auto w-full relative ${
          isMobile
            ? "h-auto flex-col gap-6 items-center px-4"
            : "h-[450px] items-center"
        }`}
      >
        <motion.div
          className="absolute top-0 md:py-0 py-10 w-full  md:h-80 md:w-80   overflow-hidden bg-[#73D19C]"
          variants={waveVariants1}
          animate="animate"
          style={isMobile ? { position: "relative" } : {}}
        >
          <div className="flex flex-col gap-6 flex-auto w-full px-[3%] justify-center items-center relative h-full">
            <motion.div
              variants={waveVariants1}
              className="w-[150px] aspect-square flex justify-center items-center bg-[#195D38] rounded-t-full"
            >
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#73D19C" }}
              >{`</>`}</h1>
            </motion.div>
            <h1
              className="typography-overview-section-copy max-w-[160px] text-center"
              style={{ color: "#195D38" }}
            >
              Please write the fixed code.
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="absolute right-0 top-0 md:py-0 py-10 w-full  md:h-80 md:w-80   overflow-hidden bg-[#FDEAEE]"
          variants={waveVariants2}
          animate="animate"
          style={isMobile ? { position: "relative", right: "auto" } : {}}
        >
          <div className="flex flex-col gap-6 flex-auto w-full px-[3%] justify-center items-center relative h-full">
            <motion.img
              width={150}
              variants={waveVariants2}
              height={100}
              src="https://cdn.dribbble.com/userupload/14945626/file/original-ab2c96de46915ddc6eddc1ab4c65026f.jpg?resize=752x&vertical=center"
            />
            <h1
              className="typography-overview-section-copy max-w-[150px] text-center"
              style={{ color: "#D55473" }}
            >
              Who is this person?
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 translate-x-[-50%] md:py-0 py-10 w-full md:h-80 md:w-80   overflow-hidden bg-[#EBF2FC]"
          variants={waveVariants2}
          animate="animate"
          style={
            isMobile
              ? { position: "relative", left: "auto", transform: "none" }
              : {}
          }
        >
          <div className="flex flex-col gap-6 flex-auto w-full px-[3%] justify-center items-center relative h-full">
            <motion.video
              width={150}
              autoPlay
              muted
              playsInline
              loop
              variants={waveVariants2}
              height={100}
              src="https://cdn.dribbble.com/userupload/15257188/file/original-402684da4e0a53c7a4027b781f9fce09.mp4"
            />
            <h1
              className="typography-overview-section-copy max-w-[150px] text-center"
              style={{ color: "#6C89D5" }}
            >
              Which match it is?
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-1/2 translate-x-[-50%]"
          animate="animate"
          style={
            isMobile
              ? { position: "relative", left: "auto", transform: "none" }
              : {}
          }
        >
          <div className="flex flex-auto bg-white w-full px-7 md:mt-0 mt-10 shadow-md py-3 border-2 card tile-rounded border-[#E28A20] justify-center items-center relative h-full">
            <h1
              className="typography-overview-section-copy text-center"
              style={{ color: "#E28A20" }}
            >
              Ask in any possible way!
            </h1>
          </div>
        </motion.div>
      </div>
      <Spacer y={100} />
    </motion.div>
  );
};

export default LPSection4;
