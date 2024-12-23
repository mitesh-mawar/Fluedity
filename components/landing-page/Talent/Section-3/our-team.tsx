"use client";

import { CTAText } from "@/components/ui/cta-text";
import { Heading } from "@/components/ui/heading";
import { Spacer } from "@/components/ui/spacer";
import { SubHeading } from "@/components/ui/sub-heading";
import { FLUEDITY_LOGO } from "@/data/app/metadata";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const team_gallery_images = [
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-1.jpg?alt=media&token=e10458d7-edcc-4e55-a7d6-c22596fdf966",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-2.jpg?alt=media&token=99900108-b96e-4e38-b5f8-84ea252b24c2",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-3.jpg?alt=media&token=dbe486fe-c990-4185-b715-dd557b2433a9",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-4.jpg?alt=media&token=1623e4b4-fab0-4df1-965f-b44d6e6f09ed",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-5.jpg?alt=media&token=83e1fdfe-cbab-47dd-b620-c5a0e3c44896",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-6.jpg?alt=media&token=11263def-c7d2-4eb2-aed7-0102483ca3cc",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-7.jpg?alt=media&token=479190bc-c3b0-4309-a4d5-025bee05f6e2",
  "https://firebasestorage.googleapis.com/v0/b/fluedity.firebasestorage.app/o/Fluedity%2FPages%2FTalent%2FTeam%20Gallery%2Fteam-gallery-8.jpg?alt=media&token=533de3c4-5a40-45ea-b8fb-c56631ef0a60",
];

export const TalentSection3 = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Helper function to determine initial X position based on column position
  const getInitialX = (index: number, columns = 4) => {
    const columnPosition = index % columns;
    // For 4 columns: returns -100% for cols 0&1 and 100% for cols 2&3
    return columnPosition < columns / 2 ? -100 : 100;
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-auto w-full overflow-hidden flex-col gap-8 relative min-h-screen pb-20"
    >
      <div className="w-full px-[25px] flex justify-center">
        <div className="w-full max-w-[1100px] flex-col md:items-center flex flex-auto justify-start">
          <div className="md:text-center relative flex typography-overview-section-headline items-center flex-wrap justify-center">
            Our
            <Image
              className="aspect-square flex p-3 mx-4 rounded-md"
              src={FLUEDITY_LOGO}
              width={100}
              height={100}
              alt="Fluedity"
              priority
            />
            Team!
          </div>
          <Spacer y={15} />
          <p className="typography-overview-section-copy max-w-[750px] mt-2 md:text-center">
            {`At Fluedity, we believe that people are the driving 
            force behind our success. Our small but passionate 
            team is committed to developing technologies that 
            improve lives and make the world a smarter, safer place. 
            We are innovators, thinkers, and creators united by a 
            common vision to push the boundaries of what's 
            possible with AI`}
          </p>
          <div className="mt-3">
            <CTAText
              title="Currently only me"
              href="https://x.com/MiteshMawar"
            />
          </div>
        </div>
      </div>

      <motion.div className="w-full px-4 md:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
          {team_gallery_images.map(
            (image, index) =>
              image && (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: getInitialX(
                      index,
                      window?.innerWidth >= 1024
                        ? 4
                        : window?.innerWidth >= 768
                        ? 2
                        : 1
                    ),
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20,
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-lg group"
                >
                  <Image
                    src={image}
                    alt={`Team member ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 4}
                  />
                </motion.div>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
};
