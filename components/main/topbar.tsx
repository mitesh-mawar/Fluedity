import ThemeToggle from "@/components/ui/theme-toggle";
import { useWebsiteData } from "@/context/website-data";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { BiWindow } from "react-icons/bi";
import { Eye } from "lucide-react";

const Topbar = () => {
  // ! Use Context
  const currentPath = usePathname();
  const router = useRouter();
  const { activeWebsite, liveActiveWebsiteData } = useWebsiteData();

  return (
    <div className="h-[53px] border-b px-2 z-10 flex items-center">
      <div className="h-auto w-full items-center flex">
        <h1 className=" text-md font-medium">
          <>
            {currentPath.startsWith("/home") && (
              <>
                {" "}
                <div className="gap-2 cursor-pointer items-center flex">
                  <div className=" leading-tight flex flex-col">
                    <span className="md:text-xl font-semibold">
                      {liveActiveWebsiteData?.title}
                    </span>
                  </div>
                </div>
              </>
            )}
          </>
        </h1>
        <div className="flex ml-auto gap-1 items-center ">
          {" "}
          {currentPath.startsWith("/home") && (
            <>
              {" "}
              <Button
                variant={"ghost"}
                onClick={() => {
                  window.open(
                    `https://${liveActiveWebsiteData?.domain}`,
                    "_blank"
                  );
                }}
                className="w-[35px] h-[35px] p-0 rounded-md items-center flex"
              >
                <Eye strokeWidth={1.2} className="w-4 h-4" />
              </Button>
            </>
          )}
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
