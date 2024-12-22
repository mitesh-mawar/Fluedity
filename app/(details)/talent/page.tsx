import React from "react";
import * as motion from "framer-motion/client";
import { company_officials, CompanyOfficialsProps } from "@/data/team/talent";
import { Carousel, Card } from "@/components/ui/card-carousel";
import { Spacer } from "@/components/ui/spacer";
import { TalentInterface } from "@/components/landing-page/Talent/Talent-Interface/talent-interface";

const Talent = () => {
  const cards = company_officials.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col flex-auto w-full justify-center">
      <div className=" relative gap-5 flex flex-col justify-center w-full items-center text-center ">
        <Spacer y={0} />
        <div className=" pt-10 flex flex-col gap-0 leading-[65px]">
          <h1 className="text-[40px] md:text-[50px] lg:text-[70px] font-bold text-center">
            We love to <span className=" text-[#5b2be5]">create!</span>
          </h1>
          <p className="text-[15px] md:text-[20px] font-normal text-center">
            And live to create
          </p>
        </div>

        {/* !!! Playable UI  */}
        <TalentInterface slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />

        {/* !!! Carousel  */}
        <motion.div className="flex  items-center justify-center relative flex-auto w-full max-h-[calc(100vh-60px)] ">
          <Carousel items={cards} />
        </motion.div>
      </div>
    </div>
  );
};

export default Talent;
