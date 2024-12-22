import React from "react";
import * as motion from "framer-motion/client";
import { company_officials } from "@/data/team/talent";
import { Carousel, Card } from "@/components/ui/card-carousel";
import { Spacer } from "@/components/ui/spacer";
import { TalentInterface } from "@/components/landing-page/Talent/Talent-Interface/talent-interface";
import { ChevronRight } from "lucide-react";
import { CreatingWhat } from "@/components/landing-page/Talent/Creating-What/creating-what";
import { HowWeLookLike } from "@/components/landing-page/Talent/HWLL/how-we-look-like";

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
              className="flex flex-col gap-2"
            >
              <h1 className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px] font-bold text-center leading-tight lg:leading-[65px]">
                We love to <span className="text-[#5b2be5]">create!</span>
              </h1>
              <p className="text-[15px] md:text-[20px] font-normal text-center">
                And live to create
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
        <CreatingWhat />
        <Spacer y={150} />
        <HowWeLookLike />
        <motion.div className="flex px-[25px] items-center justify-center relative flex-auto w-full max-h-[calc(100vh-60px)]">
          <Carousel items={cards} />
        </motion.div>
      </section>
    </div>
  );
};

export default Talent;
