import ThemeToggle from "@/components/ui/theme-toggle";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Topbar = () => {
  // ! Use Context
  const { characterId } = useParams();
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="h-[53px] border-b px-2 z-10 flex items-center">
      <div className="h-auto w-full items-center flex">
        <h1 className="capitalize text-md font-medium">
          <>{currentPath.replace(/\//g, " ").replace(/-/g, " ")}</>
        </h1>
        <div className="flex ml-auto ">
          <ThemeToggle
            variant="default"
            className=" h-9 border rounded-xl w-9"
          />
        </div>
        {/* <div className="ml-auto">
          <ThemeToggle variant="ghost" className="w-9 h-9" />
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
