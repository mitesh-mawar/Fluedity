"use client";

import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import AnalyticalWindow from "../ui/mac-window";
import WaitingList from "./waiting-list";
import { BiGift } from "react-icons/bi";

interface DataPoint {
  revenue: number;
  subscription: number;
}

const data: DataPoint[] = [
  { revenue: 26475, subscription: 0 },
  { revenue: 11244, subscription: 20 },
  { revenue: 9600, subscription: 100 },
  { revenue: 7000, subscription: 300 },
  { revenue: 11244, subscription: 500 },
  { revenue: 14405, subscription: 600 },
  { revenue: 8200, subscription: 600 },
  { revenue: 11244, subscription: 500 },
  { revenue: 7000, subscription: 300 },
  { revenue: 9600, subscription: 100 },
  { revenue: 11244, subscription: 20 },
  { revenue: 26475, subscription: 0 },
];

const HeroSection = () => {
  return (
    <div className="flex py-7 flex-col items-center flex-auto w-full justify-center">
      <div>
        <div className=" text-center">
          <h1 className="text-4xl lg:text-7xl font-semibold ">
            Your Data Has a
          </h1>
          <p className="text-4xl  lg:text-7xl font-semibold">Story to Tell</p>
        </div>
        <div className="text-center py-3">
          <p className=" text-sm md:max-w-none max-w-[300px] md:text-base text-muted-foreground">
            Let Quampi be the storyteller that turns numbers into narratives
          </p>
        </div>
      </div>
      <div className=" mt-5 lg:mt-7 justify-center flex flex-col items-center ">
        <p className="flex items-center border text-white  text-sm bg-primary/70 dark:bg-primary/20 border-primary py-2 px-3 rounded-md gap-2">
          <BiGift className=" w-5 h-5 " />
          Join waitlist for exlusive discounts
        </p>
        <WaitingList />
      </div>
      <div className=" flex flex-auto flex-wrap gap-5 w-screen h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="revenue"
              activeDot={{
                r: 6,
                style: { fill: "#DC2626", opacity: 0.25 },
              }}
              stroke={"#DC2626"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10 w-full ">
        <AnalyticalWindow />
      </div>
    </div>
  );
};

export default HeroSection;
