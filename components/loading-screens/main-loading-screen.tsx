import { PROJECT_NAME } from "@/data/app/metadata";
import Image from "next/image";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex flex-auto gap-2 flex-col justify-center items-center ">
      <div className="flex flex-col  rounded-xl items-center animate-pulse">
        <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold ">
          Quampi
        </h1>
        <h1 className="text-sm font-light">Easy analytics</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
