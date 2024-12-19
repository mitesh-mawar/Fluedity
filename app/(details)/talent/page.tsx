import React from "react";
import * as motion from "framer-motion/client";
import { company_officials, CompanyOfficialsProps } from "@/data/team/talent";
import { Carousel, Card } from "@/components/ui/card-carousel";

const Talent = () => {
  const cards = company_officials.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col flex-auto w-full justify-center">
      <div className=" py-5 md:pb-16 w-full items-center text-center ">
        <h1 className="text-[60px] md:text-[80px] lg:text-[90px] font-bold text-center">
          We live to <span className=" text-[#5b2be5]">create!</span>
        </h1>
        <p></p>
      </div>
      <motion.div className="flex md:mt-20 items-center justify-center relative flex-auto w-full max-h-[calc(100vh-60px)] ">
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
};

export default Talent;
