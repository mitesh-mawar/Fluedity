import { PROJECT_NAME } from "@/data/app/metadata";
import Image from "next/image";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex flex-auto gap-2 flex-col justify-center items-center ">
      <div className="flex relative w-16 h-16 flex-col  rounded-xl items-center animate-pulse">
        <Image
          layout="fill"
          objectFit="cover"
          alt="Fluedity"
          className="rounded-full aspect-square object-cover"
          src={"/app/Logo/fluedity-logo.png"}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
