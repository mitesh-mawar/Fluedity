import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedInfoCardProps {
  icon: ReactNode;
  heading: string;
  subheading: string;
  description: string;
}

const AnimatedInfoCard: React.FC<AnimatedInfoCardProps> = ({
  icon,
  heading,
  subheading,
  description,
}) => {
  return (
    <motion.div
      className="rounded-lg border bg-primary shadow-lg overflow-hidden max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5">
        <div className="flex  items-center mb-4">
          <div className="mr-4 text-3xl relative p-2 bg-popover rounded-md">
            {icon}
          </div>
          <div className="" >
            <h2 className="text-xl font-semibold ">{heading}</h2>
            <p className="text-sm  ">{subheading}</p>
          </div>
        </div>
        <p className="">{description}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedInfoCard;
