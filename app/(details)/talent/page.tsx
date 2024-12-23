import React from "react";
import * as motion from "framer-motion/client";
import { company_officials } from "@/data/team/talent";
import { Carousel, Card } from "@/components/ui/card-carousel";
import { Spacer } from "@/components/ui/spacer";
import { TalentInterface } from "@/components/landing-page/Talent/Hero-Section/talent-interface";
import { ChevronRight } from "lucide-react";
import { TalentSection1 } from "@/components/landing-page/Talent/Section-1/our-mission";
import { TalentSection2 } from "@/components/landing-page/Talent/Section-2/why-fluedity";
import { TalentSection3 } from "@/components/landing-page/Talent/Section-3/our-team";

const Talent = () => {
  const cards = company_officials.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col flex-auto w-full">
      {/* Hero Section */}
      <section className="min-h-screen px-[25px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-between h-full w-full max-w-7xl mx-auto px-4 pt-0 py-8">
          {/* Top Content */}
          <div className="flex-1  flex flex-col items-center justify-center w-full gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0.5, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                bounce: 0.25,
                type: "spring",
              }}
              className="flex section-design flex-col gap-2 items-center"
            >
              <h1 className="text-[30px] md:text-[50px]  lg:text-[70px] xl:text-[80px] font-bold text-center leading-tight lg:leading-[65px]">
                We love to <span className="text-[#5b2be5]">create!</span>
              </h1>
              <p className="text-[12px] md:mt-3 max-w-[700px] md:text-[18px] font-normal text-center">
                At Fluedity, we&apos;re shaping a more intelligent, productive,
                and safe world by developing groundbreaking technologies.
              </p>
            </motion.div>

            {/* Playable UI */}
            <div className="w-full">
              <TalentInterface />
            </div>

            {/* Join Fluedity */}
            <div className="flex flex-auto text-center  pt-4 w-full justify-center items-center flex-col">
              <span className=" text-primary transition-all ease-in-out duration-300 hover:text-primary/80 cursor-pointer group flex items-center gap-1">
                <h1>Join Fluedity as a talent</h1>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-all ease-in-out duration-300" />
              </span>
              <span className=" md:text-base text-sm">
                Applications will be reviewed on daily basis.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="w-full">
        <Spacer y={50} />
        <TalentSection1 />
        <Spacer y={100} />
        <TalentSection2 />
        <Spacer y={100} />
        <TalentSection3 />
      </section>
    </div>
  );
};

export default Talent;
