import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { color, motion, useScroll } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";
import {
  BiAlarm,
  BiConversation,
  BiDesktop,
  BiMath,
  BiSignal5,
  BiTable,
  BiText,
  BiUserVoice,
} from "react-icons/bi";
import { InfiniteMovingCards } from "@/components/ui/infinite-running-cards";
import Image from "next/image";
import { Code, Home, Plus, Users2 } from "lucide-react";

const commands_example = [
  <motion.li
    animate={"animate"}
    className="w-[450px] overflow-hidden relative  flex 
    flex-auto flex-col md:w-[550px]"
    key={"1"}
  >
    <div className=" relative card bg-[#FAFAFA] p-4 border tile-rounded overflow-hidden flex flex-auto w-full h-[400px] card tile-rounded">
      <Image
        className="card tile-rounded "
        alt="1"
        src={
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fafce4173085335.648a1b78da17d.jpg"
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="relative z-20  mt-5 md:mt-6    flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <div className="flex flex-auto w-full items-center ">
            <span className=" typography-custom-section-headline-reduced  font-normal">
              Collaborate
            </span>
            <Users2 className="w-10 m-1 lg:w-[60px] card tile-rounded text-[#716AD1] border-[#716AD1] p-2  lg:p-3 border boder-4 ml-auto lg:h-[60px] h-10" />
          </div>
          <span className=" typography-overview-section-copy  mt-2   font-normal">
            Seamlessly unite teams with secure, real-time collaboration.
            AI-powered workflows automate routine tasks while military-grade
            encryption protects your innovations. Create, collaborate, and
            achieve together.
          </span>
        </span>
      </div>
    </div>
  </motion.li>,
  <motion.li
    animate={"animate"}
    className="w-[450px] overflow-hidden relative  flex 
    flex-auto flex-col md:w-[550px]"
    key={"2"}
  >
    <div className=" relative card bg-[#FAFAFA] p-4 border tile-rounded overflow-hidden flex flex-auto w-full h-[400px] card tile-rounded">
      <Image
        className="card tile-rounded "
        alt="1"
        src={
          "https://cdn.dribbble.com/userupload/17572866/file/original-1d3aea278e6c2cc99a4d88873d2e8204.png?resize=1024x768&vertical=center"
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="relative z-20  mt-5 md:mt-6    flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <div className="flex flex-auto w-full items-center ">
            <span className=" typography-custom-section-headline-reduced  font-normal">
              Automate
            </span>
            <Home className="w-10 m-1 lg:w-[60px] card tile-rounded text-[#3D925B] border-[#3D925B] p-2  lg:p-3 border boder-4 ml-auto lg:h-[60px] h-10" />
          </div>
          <span className=" typography-overview-section-copy  mt-2   font-normal">
            Experience a home that anticipates your needs. Our smart automation
            platform learns preferences, orchestrating perfect moments through
            intelligent control of lighting, climate, security, and
            entertainment.
          </span>
        </span>
      </div>
    </div>
  </motion.li>,
  <motion.li
    animate={"animate"}
    className="w-[450px] overflow-hidden relative  flex 
    flex-auto flex-col md:w-[550px]"
    key={"3"}
  >
    <div className=" relative card bg-[#FAFAFA] p-4 border tile-rounded overflow-hidden flex flex-auto w-full h-[400px] card tile-rounded">
      <Image
        className="card tile-rounded "
        alt="1"
        src={
          "https://cdn.dribbble.com/users/2659724/screenshots/15260020/media/7a047d4f6658eb03053a17b7f598415c.png?resize=1000x750&vertical=center"
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="relative z-20 mt-5 md:mt-6    flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <div className="flex flex-auto w-full items-center ">
            <span className=" typography-custom-section-headline-reduced  font-normal">
              Programming
            </span>
            <Code className="w-10 m-1 lg:w-[60px] card tile-rounded text-[#547DAB] border-[#547DAB] p-2  lg:p-3 border boder-4 ml-auto lg:h-[60px] h-10" />
          </div>
          <span className=" typography-overview-section-copy mt-2  font-normal">
            Code smarter with AI-powered assistance that understands context,
            suggests optimizations, and automates debugging. Deliver exceptional
            solutions with intelligent code completion and real-time performance
            analytics.
          </span>
        </span>
      </div>
    </div>
  </motion.li>,
  <motion.li
    animate={"animate"}
    className="w-[450px] overflow-hidden relative  flex 
    flex-auto flex-col md:w-[550px]"
    key={"4"}
  >
    <div className=" relative card bg-[#FAFAFA] p-4 border tile-rounded overflow-hidden flex flex-auto w-full h-[400px] card tile-rounded">
      <Image
        className="card tile-rounded "
        alt="1"
        src={
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/56d19b118924153.6092e711b06f9.jpeg"
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="relative z-20 mt-5 md:mt-6    flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <div className="flex flex-auto w-full items-center ">
            <span className=" typography-custom-section-headline-reduced  font-normal">
              Healthcare
            </span>
            <Plus
              strokeWidth={3}
              className="w-10 m-1 lg:w-[60px] card tile-rounded text-[#FF1111] border-[#FF1111] p-2  lg:p-3 border boder-4 ml-auto lg:h-[60px] h-10"
            />
          </div>
          <span className=" typography-overview-section-copy mt-2  font-normal">
            Your AI health companion delivers custom insights and evidence-based
            guidance. From nutrition to fitness, make informed decisions for
            your wellbeing. Expert health models ensure personalized
            recommendations when you need them.
          </span>
        </span>
      </div>
    </div>
  </motion.li>,
  <motion.li
    animate={"animate"}
    className="w-[450px] overflow-hidden relative  flex 
    flex-auto flex-col md:w-[550px]"
    key={"4"}
  >
    <div className=" relative card bg-[#FAFAFA] p-4 border tile-rounded overflow-hidden flex flex-auto w-full h-[400px] card tile-rounded">
      <Image
        className="card tile-rounded "
        alt="1"
        src={
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/339eee207129751.66d848009f2e2.jpg"
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="relative z-20 mt-5 md:mt-6    flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <div className="flex flex-auto w-full items-center ">
            <span className=" typography-custom-section-headline-reduced  font-normal">
              Academics
            </span>
            <BiMath className="w-10 m-1 lg:w-[60px] card tile-rounded text-[#0E95F4] border-[#0E95F4] p-2  lg:p-3 border boder-4 ml-auto lg:h-[60px] h-10" />
          </div>
          <span className=" typography-overview-section-copy mt-2  font-normal">
            Transform learning with AI-powered flashcards, adaptive tests, and
            instant summaries. Our knowledge engine personalizes your journey,
            making complex topics accessible and retention effortless. Master
            any subject with confidence.
          </span>
        </span>
      </div>
    </div>
  </motion.li>,
];

const LPSection6 = () => {
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
      ref={sectionRef}
      className="relative w-full flex max-w-screen overflow-hidden flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Your task, <br /> Scheduled. Automated.
            </motion.h1>
            <span className="max-w-[700px] md:text-center mt-3 text-black typography-overview-section-copy">
              Whether it&apos;s about scheduling your task with a simple voice
              command or automating your recurring tasks, FCI bridges the gap
              between you and your devices. Designed to integrate effortlessly
              with IoT systems and computer environments.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 20 : 70} />
      <motion.div className="flex gap-6 flex-auto md:flex-row flex-col padding-axe my-5 md:my-0 w-full justify-center">
        <motion.div className="flex gap-3 items-center">
          <BiUserVoice
            style={{ color: "#F92A79" }}
            className="w-10 lg:w-[70px] lg:h-[70px] h-10"
          />
          <p
            className=" typography-overview-section-copy max-w-[300px]"
            style={{ color: "black" }}
          >
            Intelligent <span style={{ color: "#F92A79" }}>voice-based</span>{" "}
            command system.
          </p>
        </motion.div>{" "}
        <motion.div className="flex gap-3 items-center">
          <BiAlarm
            style={{ color: "#F92A79" }}
            className="w-10 lg:w-[70px] lg:h-[70px] h-10"
          />
          <p
            className=" typography-overview-section-copy max-w-[300px]"
            style={{ color: "black" }}
          >
            <span style={{ color: "#F92A79" }}>Schedule tasks</span> for later
            execution.
          </p>
        </motion.div>{" "}
      </motion.div>
      <Spacer y={isMobile ? 20 : 70} />
      <InfiniteMovingCards
        speed="slow"
        pauseOnHover={false}
        className="w-full flex flex-auto"
        items={commands_example}
      />
      <Spacer y={isMobile ? 100 : 200} />
    </motion.div>
  );
};

export default LPSection6;
