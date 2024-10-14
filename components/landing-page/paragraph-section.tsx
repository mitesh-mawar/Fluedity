import React from "react";

const ParagraphSection = () => {
  return (
    <div className="flex py-7 flex-col items-center flex-auto w-full justify-center">
      <div className=" pb-10 flex gap-7">
        <div className=" w-16 h-16 flex rounded-full bg-white">
          <div className=" w-8 h-8 flex rounded-full mt-6 ml-6 bg-black"></div>
        </div>
        <div className=" w-16 h-16 flex rounded-full bg-white">
          <div className=" w-8 h-8 flex rounded-full mt-6 ml-6 bg-black"></div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className=" text-center items-center flex">
          <h1 className="text-4xl lg:text-7xl font-medium ">
            Easy to integrate
          </h1>
        </div>
        <div className=" py-3">
          <p className=" text-sm text-center md:max-w-[600px] max-w-[300px] md:text-base font-light text-muted-foreground">
            Easy to integrate and light weighted. Have almost no impact on your
            fast website. Make analytics more and more quick.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParagraphSection;
