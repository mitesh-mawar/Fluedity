import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfiniteRunningLogos } from "@/components/ui/infinite-running-logos";
import Image from "next/image";
import { Card, Carousel } from "@/components/ui/card-carousel";
import { cn } from "@/lib/utils";
import { useUtilities } from "@/context/Utilities/utility";

const features = [
  {
    title: "Personalised Answers, For you.",
    description:
      "New RAG and crawling based LLM refined replies. Correct. Simple. Standard.",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6dd0f3209221345.670d3a08a29c6.png",
    category: "Text to Text",
  },
  {
    title: "Realtime Human Like Conversation.",
    description:
      "Live conversation with Cognition Intelligence. Feels like human.",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/eef6ea209221345.66fbf30e6056a.png",
    category: "Voice to voice and text.",
  },
  {
    title: "Your generative and creative buddy.",
    description:
      "Can generate whatever you can think of, leverages multiple models at once.",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d7a8a3209221345.6706376a7e2ef.png",
    category: "Generative capabilities.",
  },
  {
    title: "Automate your tasks and Relax.",
    description:
      "Cognition Intelligence can tasks automation and can remind you of one. Like human.",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/88da8e209221345.6706376a7eac4.png",
    category: "Tasks automation.",
  },
  {
    title: "Manage your AI work at one simple place.",
    description:
      "Organise your AI queries and leverage multiple features to increase productivity.",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/536cfd209221345.67053fd6c547c.png",
    category: "Tasks automation.",
  },
];

const LPSection2 = () => {
  // ! Use Context
  const { isMobile } = useUtilities();

  // ! Use Ref
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ! Carousel Card
  const cards = features.map((feature, index) => (
    <Card key={feature.title} card={feature} index={index} />
  ));

  return (
    <motion.div
      ref={sectionRef}
      className="relative  w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] padding-axe w-full">
        <div className="flex flex-auto w-full justify-start overflow-hidden">
          <motion.div className="flex flex-col  w-full">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                ease: "easeInOut",
              }}
              className="typography-custom-section-headline
               text-transparent bg-clip-text bg-gradient-to-b from-[#000000] to-[#434343]"
            >
              A Machine. <br />
              Works like a human.
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="typography-overview-section-copy mt-5   max-w-[720px]"
            >
              {`FCI is a multipurpose AI system designed to 
              transform how individuals and businesses interact 
              with technology. With FCI, you can streamline your 
              workflow, enhance decision-making, and ensure safety 
              in your environment—all with a simple, intuitive interface.`}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-auto w-full justify-start items-center">
        <Carousel need_dialog={false} items={cards} />
      </div>
      <div className=" md:flex hidden">
        <Spacer y={100} />
      </div>
      <div className=" md:hidden flex">
        <Spacer y={50} />
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
        }}
        className="w-full flex flex-auto justify-center"
      >
        <div
          className={cn(
            " max-w-[1100px]  gap-5 typography-product-stories-bento-copy   padding-axe grid grid-rows-3 md:grid-cols-3 w-full",
            isMobile && "text-[18px]"
          )}
        >
          <div className=" text-center justify-center flex flex-auto md:justify-start">
            <div className=" max-w-[450px] md:max-w-[300px]  md:pb-0 pb-5 border-b-2 border-[#D1CDD0] md:border-b-0">
              <span className=" font-semibold bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] text-transparent bg-clip-text">
                Collaborative Tools
              </span>{" "}
              facilitates teamwork with real-time document and idea sharing.
            </div>
          </div>
          <div className="text-center justify-center flex flex-auto border-[#D1CDD0] md:border-x-2 md:justify-center">
            <div className=" max-w-[450px] md:max-w-[300px]  md:pb-0 pb-5 border-b-2 md:border-b-0  border-[#D1CDD0]">
              <span className=" font-semibold bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] text-transparent bg-clip-text">
                Emotion Detection
              </span>{" "}
              understands the user&apos;s tone and mood for empathetic
              interactions.
            </div>
          </div>
          <div className="text-center justify-center flex flex-auto md:justify-end">
            <div className=" max-w-[450px] md:max-w-[300px] md:pb-0 pb-5 border-b-2 md:border-b-0 border-[#D1CDD0] ">
              <span className="font-semibold bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] text-transparent bg-clip-text">
                Knowledge Database
              </span>{" "}
              let you access to a vast library of domain-specific information.
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" md:hidden flex">
        <Spacer y={100} />
      </div>
    </motion.div>
  );
};

export default LPSection2;
