import { a } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

const TalentProfile = ({
  skills,
  quote,
  X,
  LinkedIn,
}: {
  skills: string[];
  quote: string;
  X?: string;
  LinkedIn?: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* {skills && (
        <div className="flex gap-2 flex-col ">
          <h1 className=" md:text-2xl text-xl lg:text-4xl font-bold ">
            Skills
          </h1>
          <div className="flex gap-2 mt-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" bg-primary text-white rounded-md py-1 px-4 "
              >
                <span> {skill}</span>
              </div>
            ))}
          </div>
        </div>
      )} */}
        <span>{quote}</span>
        <div className="flex gap-3">
          {X && (
            <a href={X} target="_blank">
              <BsTwitterX className="w-10 h-10 hover:rounded-md transition-all cursor-pointer ease-in-out duration-300  bg-black text-white p-2 rounded-sm" />
            </a>
          )}
          {LinkedIn && (
            <a href={LinkedIn} target="_blank">
              <BiLogoLinkedin className="w-10 h-10 hover:rounded-md transition-all bg-primary cursor-pointer ease-in-out duration-300  bg-black text-white p-2 rounded-sm" />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export interface CompanyOfficialsProps {
  title: string;
  src: string;
  content?: React.ReactNode;
  category: string;
}

export const company_officials: CompanyOfficialsProps[] = [
  {
    title: "Mitesh Mawar",
    category: "Founder & CEO",
    src: "https://pbs.twimg.com/media/GYAeJSoa4AAn511?format=jpg&name=large",
    content: (
      <div>
        <TalentProfile
          X="https://x.com/MiteshMawar"
          LinkedIn="https://www.linkedin.com/in/mitesh-mawar-409836236/"
          skills={["Software Developer", "Leader"]}
          quote="I think, the coming years are the most important ones in whole 
          human history which will lay the ground work of how our next generations 
          will live on Earth. Technology can change a widely encountered problem into
          a piece of art if given a good time to ponder upon. Fluedity is the place 
          where we ponder and have time."
        />
      </div>
    ),
  },
];
