import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Globe } from "lucide-react";
import { CircleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

interface WebsiteCardProps {
  domain: string;
  title: string;
  favicon: string;
  description: string;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
}

const WebsiteCard = ({
  domain,
  title,
  favicon,
  description,
  loadTime,
  firstContentfulPaint,
  largestContentfulPaint,
}: WebsiteCardProps) => {
  // ! Use Context
  const router = useRouter();

  return (
    <div className=" border w-full flex flex-col flex-auto rounded-md">
      <div className="h-10 items-center flex flex-auto rounded-t-md px-5 bg-secondary border-b">
        <div className="">
          <span className="text-sm ">Website card</span>{" "}
        </div>
        <div className="ml-auto  gap-1 flex">
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />{" "}
        </div>
      </div>
      <div className="p-5 gap-2 md:gap-4 flex  flex-col">
        <div className="md:px-1 flex items-baseline">
          <div>
            <h1 className="text-3xl font-semibold">{title}</h1>{" "}
            <p
              onClick={() => {
                window.open(`https://${domain}`, "_blank");
              }}
              className="text-sm pb-2 px-1 cursor-pointer  text-muted-foreground transition-all ease-in-out duration-300 hover:text-foreground"
            >
              {domain}
            </p>
          </div>
          <div className=" ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ml-auto">Fetch time</Label>
            <span className="ml-auto ">
              {" "}
              {(loadTime / 10).toPrecision(4)} s
            </span>{" "}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Avatar className=" w-14 h-14 md:w-28 md:h-28 ">
              <AvatarImage src={favicon} />
              <AvatarFallback className=" p-0">
                {" "}
                <Globe className="w-5 h-5 p-0" strokeWidth={1} />{" "}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className=" leading-tight space-y-1 px-1">
            <Label className="text-muted-foreground">Description</Label>
            <p className="text-sm font-light ">{description}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
