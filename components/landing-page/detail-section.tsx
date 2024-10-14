import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  BiLogoGraphql,
  BiMouse,
  BiPlus,
  BiSelectMultiple,
  BiSolidFaceMask,
  BiTerminal,
  BiTrafficCone,
  BiUserPlus,
} from "react-icons/bi";
import LittleCard from "../ui/little-card";

const DetailsSection = () => {
  return (
    <div className="flex py-7 flex-col items-center flex-auto w-full justify-center">
      <div className=" pb-10 flex gap-7">
        <div className=" w-16 h-16 flex rounded-full bg-white">
          <div className=" w-8 h-8 flex rounded-full m-2 bg-black"></div>
        </div>
        <div className=" w-16 h-16 flex rounded-full bg-white">
          <div className=" w-8 h-8 flex rounded-full m-2 bg-black"></div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className=" text-center items-center flex">
          <h1 className="text-4xl lg:text-7xl font-medium ">Why Quampi?</h1>
        </div>
        <div className=" py-3">
          <p className=" text-sm text-center md:max-w-[600px] max-w-[300px] md:text-base font-light text-muted-foreground">
            Quampi let you study your data in advance and multiple ways which
            enhances your performace and decision making power. You can compare
            and play with data to get good insight.s
          </p>
        </div>
      </div>
      <div className=" border w-full flex flex-col mt-10 flex-auto rounded-md">
        <div className="h-10 items-center flex flex-auto rounded-t-md px-5 bg-secondary border-b">
          <div className=" gap-1 flex">
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 p-5">
          <LittleCard
            title="Compare analytics"
            icon={<BiLogoGraphql className="   fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="Traffic monitoring"
            icon={<BiTrafficCone className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="Track multiple sites"
            icon={<BiSelectMultiple className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="Invite team members"
            icon={<BiUserPlus className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="Interactive glow"
            icon={<BiMouse className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="UI embedding"
            icon={<BiTerminal className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="No cookies"
            icon={<BiSolidFaceMask className=" fill-primary h-20 w-20 " />}
          />
          <LittleCard
            title="Much more"
            icon={<BiPlus className=" fill-primary h-20 w-20 " />}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
