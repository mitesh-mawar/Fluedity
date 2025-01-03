import React from "react";
import { motion } from "framer-motion";
import { useUtilities } from "@/context/Utilities/utility";
import { Spacer } from "@/components/ui/spacer";
import { cn } from "@/lib/utils";

interface ColorScheme {
  primary: string;
  secondary: string;
  opacity: string;
}

interface FolderColors {
  [key: string]: ColorScheme;
}

interface CardData {
  title: string;
  position: string;
}

interface FolderData {
  type: "conversations" | "business";
  title: string;
  cards: CardData[];
}

interface CardProps extends CardData {
  colorScheme: ColorScheme;
  index: number;
}

interface FolderProps extends FolderData {
  colorScheme: ColorScheme;
}

const FOLDER_COLORS: FolderColors = {
  conversations: {
    primary: "#FF5778",
    secondary: "#FF2C55",
    opacity: "30",
  },
  business: {
    primary: "#FFAA33",
    secondary: "#FF9501",
    opacity: "30",
  },
};

const FOLDER_DATA: FolderData[] = [
  {
    type: "conversations",
    title: "Conversations",
    cards: [
      { title: "Quantum physics lectures links.", position: "-10%" },
      { title: "Fluedity is best!", position: "30%" },
      { title: "Who is Mitesh Mawar?", position: "5%" },
    ],
  },
  {
    type: "business",
    title: "Business",
    cards: [
      { title: "You remember the invoice?", position: "-10%" },
      { title: "How is my real estate doing?", position: "30%" },
      { title: "Bitcoin today?", position: "5%" },
    ],
  },
];

const Card: React.FC<CardProps> = ({ title, position, colorScheme, index }) => (
  <div
    className={`absolute transition hover:translate-y-[-2px] ${
      index === 2 ? "bottom-[15%]" : "bottom-0"
    } ml-[${position}] w-full ${
      index === 0 ? "rotate-[-10deg]" : index === 1 ? "rotate-[10deg]" : ""
    }`}
  >
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.2,
        type: "spring",
        ease: "easeOut",
      }}
      className="absolute left-[20%] w-[280px] rotate-45 rounded-[30px] px-7 py-10 h-[350px] bottom-0 bg-white"
    >
      <motion.div
        className={`h-3 w-full rounded-full bg-[${colorScheme.secondary}]/${colorScheme.opacity}`}
      />
      <motion.div
        className={`w-full text-[${colorScheme.secondary}] mt-4 text-2xl font-semibold`}
      >
        {title}
      </motion.div>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-full flex gap-3">
          {[...Array(Math.floor(Math.random() * 3) + 1)].map((_, j) => (
            <motion.div
              key={j}
              className={`h-3 w-[${
                Math.floor(Math.random() * 40) + 10
              }%] rounded-full bg-[${colorScheme.secondary}]/${
                colorScheme.opacity
              } mt-3`}
            />
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

const Folder: React.FC<FolderProps> = ({ type, title, cards, colorScheme }) => {
  return (
    <div className="relative w-full max-w-4xl transform scale-80 md:scale-100">
      <div className="relative flex flex-col items-start overflow-hidden">
        <motion.div
          className={cn(
            "relative md:flex hidden",
            "w-[180px] sm:w-[220px] md:w-[350px]",
            "h-[100px] sm:h-[120px] md:h-[90px]",
            "rounded-tl-[40px] md:rounded-tl-[70px]",
            "lg:rounded-tr-[100px] lg:rounded-tl-[100px]",
            "transform origin-bottom z-0"
          )}
          style={{ backgroundColor: colorScheme.primary }}
        />
        <motion.div
          className={cn(
            "relative w-full",
            "h-[300px] sm:h-[400px] md:h-[450px]",
            "rounded-[40px] md:rounded-[70px] lg:rounded-[100px]",
            "lg:rounded-tl-none md:rounded-tl-none",
            "transform origin-top flex items-center justify-center"
          )}
          style={{ backgroundColor: colorScheme.primary }}
        />

        {cards.map((card, index) => (
          <Card key={index} {...card} colorScheme={colorScheme} index={index} />
        ))}

        <motion.div
          className="absolute w-full z-10 rounded-b-[40px] 
                    md:rounded-b-[70px] lg:rounded-b-[100px] flex
                    flex-auto h-[30%] bottom-0"
          style={{ backgroundColor: colorScheme.primary }}
        >
          <span
            className={cn(
              "font-normal h-full w-full lg:p-10 p-5 items-center",
              "text-4xl md:text-6xl font-semibold mt-2 text-white"
            )}
          >
            {title}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const LPSection8: React.FC = () => {
  const { isMobile } = useUtilities();

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        ease: "easeInOut",
      }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white"
    >
      <motion.div className="max-w-[1100px] px-4 md:px-6 lg:px-8 w-full">
        <div className="flex flex-auto w-full justify-center overflow-hidden">
          <motion.div className="flex flex-col w-full md:items-center">
            <motion.h1 className="typography-product-stories-headline pb-2 md:text-center">
              Chat. Code.
              <br /> Create. Organised.
            </motion.h1>
            <span className="max-w-[720px] md:text-center mt-3 text-black typography-overview-section-copy">
              FCI redefines language interactions with the most advanced chat
              experience ever created. Designed for seamless multitasking, it
              features efficient interfaces, an AI-powered code editor, and a
              folder-based LLM chat for ultimate organization and efficiency.
              Effortlessly manage complex workflows, collaborate in real-time,
              and tailor your experience with intelligent tools built to adapt
              to you.
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Spacer y={isMobile ? 20 : 90} />
      <motion.div className="graphic-center-div grid w-full gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 px-4 md:px-6 lg:px-8">
        {FOLDER_DATA.map((folder, index) => (
          <Folder
            key={index}
            {...folder}
            colorScheme={FOLDER_COLORS[folder.type]}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LPSection8;
