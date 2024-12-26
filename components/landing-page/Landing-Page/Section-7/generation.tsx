import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { color, motion, useScroll } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";
import {
  BiAlarm,
  BiBorderOuter,
  BiBrain,
  BiConversation,
  BiDesktop,
  BiImage,
  BiMap,
  BiMath,
  BiSignal5,
  BiTable,
  BiText,
  BiUserVoice,
  BiVideo,
} from "react-icons/bi";
import { InfiniteMovingCards } from "@/components/ui/infinite-running-cards";
import Image from "next/image";
import { Code, Home, ImageIcon, Plus, Users2, Video } from "lucide-react";

const waveVariants3 = {
  animate: {
    borderRadius: [
      "30% 60% 70% 40%/50% 60% 40% 60%",
      "30% 60% 70% 40%/50% 60% 40% 60%",
      "80% 80% 30% 50%/80% 30% 40% 70%",
      "30% 60% 70% 40%/50% 60% 40% 60%",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const waveVariants1 = {
  animate: {
    borderRadius: [
      "80% 80% 30% 50%/80% 30% 40% 70%",
      "30% 60% 70% 40%/50% 60% 40% 60%",
      "80% 80% 30% 50%/80% 30% 40% 70%",
      "40% 50% 60% 80%/40% 50% 70% 50%",
      "80% 80% 30% 50%/80% 30% 40% 70%",
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
      "80% 80% 30% 50%/80% 30% 40% 70%",
      "40% 50% 60% 80%/40% 50% 70% 50%",
      "80% 80% 30% 50%/80% 30% 40% 70%",
      "30% 60% 70% 40%/50% 60% 40% 60%",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LPSection7 = () => {
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
      className="relative w-full flex max-w-screen overflow-hidden flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Generate, <br /> Animate. Edit. Repeat.
            </motion.h1>
            <span className="max-w-[720px] md:text-center mt-3 text-black typography-overview-section-copy">
              Transform ideas into reality with its generative AI capabilities.
              From crafting original content to designing innovative solutions,
              it empowers boundless creativity, enhancing productivity and
              enabling users to achieve more with effortless precision and
              innovation.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 20 : 70} />
      <motion.div className="flex gap-6 lg:gap-10 flex-auto md:flex-row flex-col padding-axe my-5 md:my-0  w-full justify-center">
        <motion.div className="flex gap-3 items-center">
          <ImageIcon
            style={{ color: "#2DA103" }}
            className="w-10 lg:w-[65px] lg:h-[65px] h-10"
          />
          <p
            className="  typography-overview-section-copy"
            style={{ color: "black" }}
          >
            Realistic, cinematic,
            <br /> anime stlye <span style={{ color: "#2DA103" }}>images</span>.
          </p>
        </motion.div>{" "}
        <motion.div className="flex gap-3 items-center">
          <Video
            strokeWidth={1.7}
            style={{ color: "#2DA103" }}
            className="w-10 lg:w-[70px] lg:h-[70px] h-10"
          />
          <p
            className=" typography-overview-section-copy max-w-[300px]"
            style={{ color: "black" }}
          >
            Upto <span style={{ color: "#2DA103" }}>10 seconds </span>
            <br />
            of life-like video.
          </p>
        </motion.div>{" "}
        <motion.div className="flex gap-3 items-center">
          <BiBrain
            style={{ color: "#2DA103" }}
            className="w-10 lg:w-[70px] lg:h-[70px] h-10"
          />
          <p
            className=" typography-overview-section-copy max-w-[300px]"
            style={{ color: "black" }}
          >
            Creative <span style={{ color: "#2DA103" }}>mindaps </span>
            <br />
            on any topic.
          </p>
        </motion.div>{" "}
      </motion.div>
      <Spacer y={isMobile ? 20 : 130} />
      <div className="container mx-auto px-[7%]">
        <motion.div className="grid  grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 py-8">
          <div className="relative aspect-square">
            <motion.img
              animate="animate"
              variants={waveVariants1}
              className="absolute inset-0 z-10 w-full h-full object-cover rounded-lg"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2be2c2214958451.6761adb694add.png"
              alt="Abstract 1"
            />
            <motion.div
              animate="animate"
              variants={waveVariants2}
              className="absolute inset-0 bg-[#675DFF]/40 scale-105 z-[1] rounded-lg"
            />
          </div>

          <div className="relative aspect-square">
            <motion.img
              animate="animate"
              variants={waveVariants2}
              className="absolute inset-0 z-10 w-full h-full object-cover rounded-lg"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ab3780214626617.675b21e09e5a6.jpg"
              alt="Abstract 2"
            />
            <motion.div
              animate="animate"
              variants={waveVariants1}
              className="absolute inset-0 bg-red-500/40 scale-105 z-[1] rounded-lg"
            />
          </div>

          <div className="relative aspect-square">
            <motion.img
              animate="animate"
              variants={waveVariants3}
              className="absolute inset-0 z-10 w-full h-full object-cover rounded-lg"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/82e580183205727.653b44cc0384b.png"
              alt="Abstract 3"
            />
            <motion.div
              animate="animate"
              variants={waveVariants1}
              className="absolute inset-0 bg-[#FEB737]/40 scale-105 z-[1] rounded-lg"
            />
          </div>
        </motion.div>
      </div>
      <Spacer y={isMobile ? 100 : 200} />
    </motion.div>
  );
};

export default LPSection7;
