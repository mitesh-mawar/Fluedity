import { Spacer } from "@/components/ui/spacer";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LPSection1 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Simplified transformations with smoother transitions
  const imageScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.5]);
  const imageCornerRadius = useTransform(scrollYProgress, [0.3, 0.5], [0, 500]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  // Remove dynamic height transformation and use CSS for responsive height
  const containerWidth = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["100%", "170%"]
  );

  const translateInY = useTransform(scrollYProgress, [0.4, 0.8], [0, 300]);

  return (
    <div
      ref={sectionRef}
      className="relative gap-10 w-full flex flex-auto flex-col items-center"
    >
      <motion.div className="max-w-[1100px] px-[22px] lg:px-0 w-full">
        <div className="flex flex-auto w-full">
          <motion.div className="flex flex-col items-start w-full">
            <h1 className="typography-custom-section-headline-reduced">
              <span className="">Fluedity Cognition Intelligence:</span>
              <br /> The Next Generation of AI
            </h1>
            <p className="typography-overview-section-copy mt-5 max-w-[720px]">
              {`FCI is a multipurpose AI system designed to 
              transform how individuals and businesses interact 
              with technology. With FCI, you can streamline your 
              workflow, enhance decision-making, and ensure safety 
              in your environment—all with a simple, intuitive interface.`}
            </p>
          </motion.div>
          <div className="relative max-w-[30%]">
            <video
              src="https://cdn.dribbble.com/userupload/15697531/file/original-0242acdc69146d4472fc5e69b48616dc.mp4"
              muted
              autoPlay
              playsInline
              loop
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
      <Spacer y={0} />
      <motion.div
        style={{
          width: containerWidth,
          scale: imageScale,
        }}
        className="aspect-video h-[80vh] relative flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white z-10 italic typography-overview-section-headline">
            FCI
          </span>
        </div>
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ borderRadius: imageCornerRadius }}
        />
        <motion.img
          alt="FCI Visualization"
          style={{
            opacity: imageOpacity,
            borderRadius: imageCornerRadius,
          }}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7caccb213693917.674ebd92d28e7.png"
        />
      </motion.div>
      <Spacer y={200} />
    </div>
  );
};

export default LPSection1;
