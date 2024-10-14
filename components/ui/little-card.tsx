import React from "react";

const LittleCard = ({
  icon,
  title,
}: {
  icon: React.ReactElement;
  title: string;
}) => {
  return (
    <div className=" bg-primary/30 transition-all ease-in-out duration-300 hover:translate-y-[-2px] flex flex-col items-center px-4 py-3 rounded-md">
      {icon}
      <p className=" font-light text-center mt-2 md:text-base text-sm ">
        {title}
      </p>
    </div>
  );
};

export default LittleCard;
