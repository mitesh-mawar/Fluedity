import React from "react"; // React
import * as motion from "framer-motion/client";
import Image from "next/image";
import { company_officials, CompanyOfficialsProps } from "@/data/team/talent";
import { Carousel, Card } from "@/components/ui/card-carousel";

const Talent = () => {
  const cards = company_officials.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-auto w-full items-center justify-center">
      <motion.div className="flex items-center justify-center relative flex-auto w-full h-[calc(100vh-60px)] ">
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
};

export default Talent;
