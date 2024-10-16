import * as React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronsUpDown,
  LogOut,
  CreditCard,
  LifeBuoy,
  User,
  Globe,
  Plus,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useWebsiteData } from "@/context/website-data";

const WebsiteView = ({ isCollapsed }: { isCollapsed: boolean }) => {
  // ! Use Ref
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // ! Use Context
  const router = useRouter();
  const {
    myWebsites,
    setActiveWebsite,
    activeWebsite,
    activeWebsiteHTML,
    liveActiveWebsiteData,
  } = useWebsiteData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        ref={triggerRef}
        className={cn(
          " py-1 px-2 text-sm md:text-[14px]  font-semibold flex gap-2 items-center bg-primary/20 border-primary border rounded-md my-2 flex-auto  ring-none outline-none",
          isCollapsed &&
            " p-0 bg-transparent justify-center m-[10px] rounded-full border-2"
        )}
      >
        <Avatar className="w-8 h-8 bg-transparent">
          <AvatarImage
            className=""
            src={liveActiveWebsiteData?.favicon ?? undefined}
            alt="User avatar"
          />
          <AvatarFallback>
            <User strokeWidth={1.2} className="w-8  p-1 h-8" />
          </AvatarFallback>
        </Avatar>
        {liveActiveWebsiteData ? (
          <>
            {!isCollapsed && (
              <>
                <span className="flex-grow text-left overflow-hidden text-ellipsis">
                  {liveActiveWebsiteData.title || "..."}
                </span>
                <ChevronsUpDown className="h-4 text-white w-4 shrink-0 opacity-50" />
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-auto bg-secondary h-full w-full rounded-md animate-pulse"></div>
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        forceMount
        align="start"
        side="bottom"
        className={cn("lg:w-72 md:w-40 ")}
      >
        <DropdownMenuLabel className=" flex items-center">
          My website
          <Button
            onClick={() => {
              router.push("/add-website");
            }}
            className=" ml-auto rounded-md w-6 h-6 p-0"
          >
            <Plus className=" w-5 h-5" />
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {myWebsites.map((website, index) => (
          <DropdownMenuItem
            onClick={() => {
              setActiveWebsite(website.domain);
            }}
            className="gap-2 cursor-pointer items-center flex"
            key={index}
          >
            <Avatar className="p-0 w-8 h-8">
              <AvatarImage src={website.favicon} />
              <AvatarFallback className=" p-0">
                {" "}
                <Globe className="w-5 h-5 p-0" strokeWidth={1} />{" "}
              </AvatarFallback>
            </Avatar>
            <div className=" leading-tight flex flex-col">
              <span>{website.title}</span>
              <span className="text-[12px] text-muted-foreground">
                {website.domain}
              </span>
            </div>
          </DropdownMenuItem>
        ))}{" "}
        {myWebsites.length == 0 && (
          <DropdownMenuLabel className="opacity-50">
            No website added yet.
          </DropdownMenuLabel>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WebsiteView;
