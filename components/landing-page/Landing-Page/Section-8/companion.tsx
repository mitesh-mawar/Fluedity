import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { color, motion, useScroll } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";
import { BiBrain } from "react-icons/bi";
import {
  Code,
  Code2,
  Folder,
  Home,
  ImageIcon,
  Plus,
  Users2,
  Video,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

const LPSection8 = () => {
  const { isMobile } = useUtilities();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        ease: "easeInOut",
      }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white p-4"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Chat, <br /> Code. Create. Organised.
            </motion.h1>
            <span className="max-w-[720px] md:text-center mt-3 text-black typography-overview-section-copy">
              FCI redefines language interactions with the most advanced chat
              experience ever created. Designed for seamless multitasking, it
              features efficient interfaces, an AI-powered code editor, and a
              folder-based LLM chat for ultimate organization and efficiency.
              Effortlessly manage complex workflows, collaborate in real-time,
              and tailor your experience with intelligent tools built to adapt
              to you.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 20 : 90} />
      <motion.div className="graphic-center-div grid w-full gap-5 md:gap-10 md:grid-cols-2">
        <div className="relative w-full max-w-4xl">
          {/* Container for positioning */}
          <div className="relative flex flex-col items-start overflow-hidden">
            {/* Folder Tab - Now aligned to left */}
            <motion.div
              className="relative w-[180px] sm:w-[220px] md:w-[350px] 
                     h-[100px] sm:h-[120px] md:h-[90px] 
                     bg-[#FF5778] rounded-tl-[40px] md:rounded-tl-[70px] 
                     lg:rounded-tr-[100px] lg:rounded-tl-[100px]
                     transform origin-bottom z-0 mb-1"
            />
            {/* Folder Body - Full width */}
            <motion.div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] 
                     bg-[#FF5778] rounded-[40px] md:rounded-[70px] lg:rounded-[100px]
                     lg:rounded-tl-none md:rounded-tl-none 
                       transform origin-top -mt-1
                     flex items-center justify-center"
            ></motion.div>
            <div className="absolute ml-[-10%] bottom-0 w-full rotate-[-10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30" />
                <motion.div className="w-full text-[#FF2C55] mt-4 text-2xl font-semibold">
                  Quantum physics lectures links.
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute ml-[30%] bottom-0 w-full rotate-[10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <motion.div className="w-full text-[#FF2C55]  mt-4 text-2xl font-semibold">
                  Fluedity is best!
                </motion.div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute  bottom-[15%]  ml-[5%] w-full  ">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] border rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30" />
                <motion.div className="w-full text-[#FF2C55] mt-4 text-2xl font-semibold">
                  Who is Mitesh Mawar?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#FF2C55]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF2C55]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF2C55]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <motion.div
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                ease: "easeOut",
              }}
              className="absolute w-full z-10 rounded-b-[40px] 
              md:rounded-b-[70px] lg:rounded-b-[100px] flex
               flex-auto h-[30%] bottom-0 bg-[#FF2C55] "
            >
              <span
                className={cn(
                  "font-normal h-full w-full lg:p-10 items-center ",
                  !isMobile
                    ? " text-6xl font-semibold mt-2 "
                    : "text-3xl font-semibold"
                )}
                style={{ color: "white" }}
              >
                Conversations
              </span>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl">
          {/* Container for positioning */}
          <div className="relative flex flex-col items-start overflow-hidden">
            {/* Folder Tab - Now aligned to left */}
            <motion.div
              transition={{
                duration: 0.8,
                type: "spring",
                ease: "easeOut",
              }}
              className="relative w-[180px] sm:w-[220px] md:w-[350px] 
                     h-[100px] sm:h-[120px] md:h-[90px] 
                     bg-[#FFAA33] rounded-tl-[40px] md:rounded-tl-[70px] 
                     lg:rounded-tr-[100px] lg:rounded-tl-[100px]
                     transform origin-bottom z-0 mb-1"
            />
            {/* Folder Body - Full width */}
            <motion.div
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                ease: "easeOut",
              }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] 
                     bg-[#FFAA33] rounded-[40px] md:rounded-[70px] lg:rounded-[100px]
                     lg:rounded-tl-none md:rounded-tl-none 
                       transform origin-top -mt-1
                     flex items-center justify-center"
            ></motion.div>
            <div className="absolute ml-[-10%] bottom-0 w-full rotate-[-10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#FF9501]  mt-4 text-2xl font-semibold">
                  You remember the invoice?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute ml-[30%] bottom-0 w-full rotate-[10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#FF9501]  mt-4 text-2xl font-semibold">
                  How is my real estate doing?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute  bottom-[15%]  ml-[5%] w-full  ">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] border rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#FF9501]  mt-4 text-2xl font-semibold">
                  Bitcoin today?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#FF9501]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#FF9501]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#FF9501]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <motion.div
              transition={{
                duration: 0.8,
                type: "spring",
                ease: "easeOut",
              }}
              className="absolute w-full z-10 rounded-b-[40px] 
              md:rounded-b-[70px] lg:rounded-b-[100px] flex
               flex-auto h-[30%] bottom-0 bg-[#FF9501] "
            >
              {" "}
              <span
                className={cn(
                  "font-normal h-full w-full lg:p-10 items-center ",
                  !isMobile
                    ? " text-6xl font-semibold mt-2 "
                    : "text-3xl font-semibold"
                )}
                style={{ color: "white" }}
              >
                Business
              </span>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl">
          {/* Container for positioning */}
          <div className="relative flex flex-col items-start overflow-hidden">
            {/* Folder Tab - Now aligned to left */}
            <motion.div
              initial={{ scaleY: 0.9 }}
              whileInView={{ scaleY: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                ease: "easeOut",
              }}
              className="relative w-[180px] sm:w-[220px] md:w-[350px] 
                     h-[100px] sm:h-[120px] md:h-[90px] 
                     bg-[#631495]/60 rounded-tl-[40px] md:rounded-tl-[70px] 
                     lg:rounded-tr-[100px] lg:rounded-tl-[100px]
                     transform origin-bottom z-0 mb-1"
            />
            {/* Folder Body - Full width */}
            <motion.div
              transition={{
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                ease: "easeOut",
              }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] 
                     bg-[#631495]/60 rounded-[40px] md:rounded-[70px] lg:rounded-[100px]
                     lg:rounded-tl-none md:rounded-tl-none 
                       transform origin-top -mt-1
                     flex items-center justify-center"
            ></motion.div>
            <div className="absolute ml-[-10%] bottom-0 w-full rotate-[-10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#631495]  mt-4 text-2xl font-semibold">
                  Create a website.
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute ml-[30%] bottom-0 w-full rotate-[10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#631495]  mt-4 text-2xl font-semibold">
                  Code a game for me.
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute  bottom-[15%]  ml-[5%] w-full  ">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] border rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="w-full text-[#631495]  mt-4 text-2xl font-semibold">
                  Fix this program please. <Code2 className="mt-2" />
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#631495]/30 mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#631495]/30 mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#631495]/30 mt-3" />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="absolute w-full z-10 rounded-b-[40px] 
              md:rounded-b-[70px] lg:rounded-b-[100px] flex
               flex-auto h-[30%] bottom-0 bg-[#631495] "
            >
              {" "}
              <span
                className={cn(
                  "font-normal h-full w-full lg:p-10 items-center ",
                  !isMobile
                    ? " text-6xl font-semibold mt-2 "
                    : "text-3xl font-semibold"
                )}
                style={{ color: "white" }}
              >
                Programming
              </span>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl">
          {/* Container for positioning */}
          <div className="relative flex flex-col items-start overflow-hidden">
            {/* Folder Tab - Now aligned to left */}
            <motion.div
              initial={{ scaleY: 0.9 }}
              whileInView={{ scaleY: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                ease: "easeOut",
              }}
              className="relative w-[180px] sm:w-[220px] md:w-[350px] 
                     h-[100px] sm:h-[120px] md:h-[90px] 
                     bg-[#FFAA33] rounded-tl-[40px] md:rounded-tl-[70px] 
                     lg:rounded-tr-[100px] lg:rounded-tl-[100px]
                     transform origin-bottom z-0 mb-1"
            />
            {/* Folder Body - Full width */}
            <motion.div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] 
                     bg-[#FFAA33] rounded-[40px] md:rounded-[70px] lg:rounded-[100px]
                     lg:rounded-tl-none md:rounded-tl-none 
                       transform origin-top -mt-1
                     flex items-center justify-center"
            ></motion.div>
            <div className="absolute ml-[-10%] bottom-0 w-full rotate-[-10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4]" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="w-full text-black/50  mt-4 text-2xl font-semibold">
                  You remember the invoice?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute ml-[30%] bottom-0 w-full rotate-[10deg]">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4]" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="w-full text-[#FF9501]  mt-4 text-2xl font-semibold">
                  How is my real estate doing?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
              </motion.div>
            </div>
            <div className="absolute  bottom-[15%]  ml-[5%] w-full  ">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  type: "spring",
                  ease: "easeOut",
                }}
                className="absolute left-[20%] w-[280px] border rotate-45 rounded-[30px] px-7 py-10 h-[350px]   bottom-0 bg-white "
              >
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4]" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="w-full text-[#FF9501]  mt-4 text-2xl font-semibold">
                  Bitcoin today?
                </motion.div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[50%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <motion.div className="h-3 w-full rounded-full bg-[#F4F4F4] mt-3" />
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>{" "}
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[10%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[20%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
                <div className="w-full flex gap-3">
                  <motion.div className="h-3 w-[18%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[40%] rounded-full bg-[#F4F4F4] mt-3" />
                  <motion.div className="h-3 w-[30%] rounded-full bg-[#F4F4F4] mt-3" />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="absolute w-full z-10 rounded-b-[40px] 
              md:rounded-b-[70px] lg:rounded-b-[100px] flex
               flex-auto h-[30%] bottom-0 bg-[#FF9501] "
            >
              {" "}
              <span
                className={cn(
                  "font-normal h-full w-full lg:p-10 items-center ",
                  !isMobile
                    ? " text-6xl font-semibold mt-2 "
                    : "text-3xl font-semibold"
                )}
                style={{ color: "white" }}
              >
                Business
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LPSection8;
