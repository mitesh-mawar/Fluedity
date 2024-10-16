import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Globe } from "lucide-react";
import { CircleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

interface WebsiteGeneralDetailsProps {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  keywords: string[];
  lastUpdated: Date;
  language: string;
  author: string;
  contentType: string;
  robots: string;
  canonical: string;
}

const WebsiteGeneralDetails = ({
  facebook,
  twitter,
  linkedin,
  instagram,
  keywords,
  lastUpdated,
  language,
  author,
  contentType,
  robots,
  canonical,
}: WebsiteGeneralDetailsProps) => {
  // ! Use Context
  const router = useRouter();

  return (
    <div className=" border w-full flex flex-col flex-auto rounded-md">
      <div className="h-10 items-center flex flex-auto rounded-t-md px-5 bg-secondary border-b">
        <div className="">
          <span className="text-sm ">General information</span>{" "}
        </div>
        <div className="ml-auto  gap-1 flex">
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />{" "}
        </div>
      </div>
      <div className="p-5 gap-2 md:gap-4 flex  flex-col">
        <div className="md:px-1 flex items-baseline">
          <div className="flex flex-col gap-1">
            <Label className="text-muted-foreground ">Last updated</Label>
            <span className="ml-auto ">
              {" "}
              {lastUpdated.toLocaleString()}
            </span>{" "}
          </div>
          <div className=" ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ml-auto">Author</Label>
            <span className="ml-auto "> {author}</span>{" "}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className=" leading-tight space-y-1 px-1">
            <Label className="text-muted-foreground">Robots</Label>
            <p className="text-sm font-light ">{robots}</p>{" "}
          </div>
          <div className=" ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ml-auto">Language</Label>
            <span className="ml-auto "> {language}</span>{" "}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className=" leading-tight space-y-1 px-1">
            <Label className="text-muted-foreground">Content type</Label>
            <p className="text-sm font-light ">
              {contentType.length ? contentType : <>not found</>}
            </p>{" "}
          </div>
          <div className=" ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ml-auto">Canonical</Label>
            <span
              className="ml-auto text-sm cursor-pointer"
              onClick={() => {
                window.open(canonical, "_blank");
              }}
            >
              {" "}
              {canonical}
            </span>{" "}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className=" leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ">Facebook</Label>
            <span
              className="text-sm"
              onClick={() => {
                window.open(facebook, "_blank");
              }}
            >
              {" "}
              {facebook && facebook?.length > 0 ? facebook : <>N/A</>}
            </span>{" "}
          </div>
          <div className="ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ">Instagram</Label>
            <span
              className="text-sm"
              onClick={() => {
                window.open(instagram, "_blank");
              }}
            >
              {" "}
              {instagram && instagram?.length > 0 ? instagram : <>N/A</>}
            </span>{" "}
          </div>
          <div className="ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ">X</Label>
            <span
              className="text-sm"
              onClick={() => {
                window.open(twitter, "_blank");
              }}
            >
              {" "}
              {twitter && twitter?.length > 0 ? twitter : <>N/A</>}
            </span>{" "}
          </div>
          <div className="ml-auto leading-tight gap-1 px-1 flex flex-col">
            <Label className="text-muted-foreground ">linkedin</Label>
            <span
              className="text-sm"
              onClick={() => {
                window.open(linkedin, "_blank");
              }}
            >
              {" "}
              {linkedin && linkedin?.length > 0 ? linkedin : <>N/A</>}
            </span>{" "}
          </div>
        </div>
        <div className=" leading-tight gap-1 px-1 flex flex-col">
          <Label className="text-muted-foreground ">Keywords</Label>
          <span className="text-sm"> {keywords}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default WebsiteGeneralDetails;
