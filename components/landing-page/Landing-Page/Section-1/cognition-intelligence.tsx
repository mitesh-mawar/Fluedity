import { Spacer } from "@/components/ui/spacer";
import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";

const LPSection1 = () => {
  // ! Use Context
  const { isMobile } = useUtilities();

  // ! Use Ref
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.5]);
  const imageCornerRadius = useTransform(scrollYProgress, [0.3, 0.5], [0, 500]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.52], [1, 0]);
  const containerWidth = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["100%", "170%"]
  );

  // Add logo opacity transformation
  const fciTextOpacity = useTransform(scrollYProgress, [0.5, 0.52], [1, 0]);
  const QSCOpacity = useTransform(scrollYProgress, [0.52, 0.54], [0, 1]);
  const QSCScale = useTransform(scrollYProgress, [0.52, 0.54], [0.8, 1]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative gap-10 w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] px-[22px] lg:px-0 w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col md:items-center w-full">
            <motion.h1
              initial={{ y: 40, scale: 0.7, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                ease: "easeInOut",
              }}
              className="typography-custom-section-headline md:text-center"
            >
              The Next <br />
              Generation of AI
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="typography-overview-section-copy mt-5 md:text-center max-w-[720px]"
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
      <Spacer y={0} />
      <motion.div className="flex flex-auto w-full overflow-hidden">
        <motion.div
          style={{
            width: isMobile ? "100%" : containerWidth,
            scale: isMobile ? 1 : imageScale,
          }}
          className="aspect-video h-[80vh] relative flex items-center justify-center overflow-hidden"
        >
          <motion.div
            style={{ opacity: fciTextOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-white z-10 italic typography-overview-section-headline">
              FCI
            </span>
          </motion.div>
          <motion.div
            style={{ opacity: QSCOpacity, scale: QSCScale }}
            className="flex items-center justify-center"
          >
            <span className="text-white px-[10%] md:px-0 z-10 italic typography-overview-section-headline">
              Quick. Simple. Connected.
            </span>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ borderRadius: isMobile ? 0 : imageCornerRadius }}
          />
          <motion.img
            alt="FCI Visualization"
            style={{
              opacity: imageOpacity,
              borderRadius: isMobile ? 0 : imageCornerRadius,
            }}
            className="absolute inset-0 w-full h-full object-cover"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7caccb213693917.674ebd92d28e7.png"
          />
        </motion.div>
      </motion.div>
      <div className="md:text-center mt-7 lg:px-0 px-[22px] typography-overview-section-copy ">
        <h1 className=" max-w-[700px]">
          An integrated, user based system in which the replies are personalised
          and upfront from the
          <span className="text-black"> Cogntiion Intelligence </span>{" "}
        </h1>
      </div>
      <Spacer y={100} />
    </motion.div>
  );
};

export default LPSection1;
