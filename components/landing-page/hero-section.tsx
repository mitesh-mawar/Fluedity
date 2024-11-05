import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import AnalyticalWindow from "../ui/mac-window";
import WaitingList from "./waiting-list";
import { BiGift } from "react-icons/bi";
import Image from "next/image";
import { ListTodo } from "lucide-react";
import { useUser } from "@/context/authentication";

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
  // ! Use Context
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center h-screen flex-auto w-full justify-center">
      <div className="my-auto gap-10 flex flex-col items-center">
        <span className="text-xl italic   text-[#01DA58] px-7 py-2 font-semibold ">
          Fluedity
        </span>
        <div className="">
          <div className=" text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl lg:text-7xl font-semibold ">
              All new powerful
            </h1>
            <p className="text-4xl  lg:text-7xl font-semibold">
              Cognition Intelligence
            </p>
          </div>
          <div className="text-center py-3 justify-center flex">
            <p className=" text-sm md:max-w-[700px] max-w-[300px] md:text-base text-muted-foreground">
              Fluedity&apos;s Cognition Intelligence let&apos;s you use AI
              features with realtime motion tracking.
              <br />
              <span className=" font-bold">
                Ultimately making you a wizard.
              </span>
            </p>
          </div>
          <div className=" mb-7 lg:mb-10 xl:mb-16 justify-center flex flex-col items-center ">
            <WaitingList />
          </div>
        </div>
        <div className="bg-black transition-all ease-in-out justify-between flex duration-300 hover:scale-[101%]  items-center relative rounded-full">
          <video
            autoPlay
            muted
            controls={false}
            loop
            className="w-40 cursor-pointer transition-all ease-in-out duration-300 hover:translate-x-[-5px]    h-40 object-cover rounded-full"
            src="https://cdn.dribbble.com/userupload/15363755/file/original-33c8fceaa8f1f12da02deb9ef182cafd.mp4"
          />
          <div className="relative gap-2 flex flex-col text-center  max-w-[500px]">
            <h1 className="text-white text-4xl font-semibold ">
              {"Pending task!"}
            </h1>
            <span className="text-[#86868B] font-medium  text-ellipsis overflow-hidden">
              <span className=" capitalize">
                {user && <>{user.displayName},</>}{" "}
              </span>
              Submit your assigment before 3:00 PM or else you will not be
              allowed in today&apos;s class.
            </span>
          </div>{" "}
          <div className=" bg-black cursor-pointer transition-all hover:translate-x-[5px] rounded-full w-40 h-40 items-center justify-center ease-in-out duration-300 flex relative px-10">
            <ListTodo
              strokeWidth={1.5}
              className="transition-all  w-20 h-20  ring-4 text-white bg-[#FF1111]/50 ring-[#FF1111] p-4 ease-in-out duration-300 object-cover rounded-full"
              // src="https://cdn.dribbble.com/users/2066397/screenshots/4881747/1billiontasks_v01.png?resize=800x600&vertical=center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
