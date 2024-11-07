"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { useUtilities } from "@/context/utility";
import { BiMenu } from "react-icons/bi";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { ArrowLeftIcon, Cross1Icon } from "@radix-ui/react-icons";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { ChevronRight, House, LogOut } from "lucide-react";
import { BsFillHouseAddFill, BsHouse } from "react-icons/bs";
import { useUser } from "@/context/authentication";

const LandingPageNavbar = () => {
  // ! Use Context
  const router = useRouter();
  const { isMobile } = useUtilities();
  const currentPath = usePathname();
  const { user } = useUser();

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <nav className="max-w-[1500px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center z-[100] cursor-pointer gap-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              width={32}
              alt="Fluedity"
              height={32}
              className="rounded-full w-8 h-8 object-cover"
              src="/app/logo.png"
            />
            <h1 className="text-lg md:text-xl font-medium">Fluedity</h1>
          </div>
          {isMobile ? (
            <>
              <Sheet>
                <SheetTrigger>
                  <div className="ml-auto items-center">
                    <BiMenu className="" size={25} />
                  </div>
                </SheetTrigger>
                <SheetContent className=" p-0 z-50" side={"top"}>
                  <div className="h-14 items-center bg-transparent  px-4 w-full flex py-2 border-b">
                    <div
                      className="flex items-center z-[100] cursor-pointer gap-2"
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      <Image
                        width={32}
                        alt="Fluedity"
                        height={32}
                        className="rounded-full w-8 h-8 object-cover"
                        src="/app/logo.png"
                      />
                      <h1 className="text-lg md:text-xl font-medium">
                        Fluedity
                      </h1>
                    </div>
                    <div className=" ml-auto flex gap-3">
                      <SheetClose className="items-center flex ">
                        <Cross1Icon className=" w-5 h-5" />
                      </SheetClose>{" "}
                    </div>
                  </div>

                  <div className="py-4 px-5 flex flex-col gap-4">
                    <NavigationLink title="Talent" link="/talent" />
                    <div className="flex gap-3 w-full my-2 ">
                      {user && (
                        <>
                          <Button
                            className="h-8 flex flex-auto rounded-full"
                            onClick={async () => {
                              await signOut(auth);
                            }}
                          >
                            Log out
                          </Button>
                        </>
                      )}
                      {!user && (
                        <>
                          {" "}
                          {!currentPath.startsWith("/sign-in") && (
                            <Button
                              onClick={() => {
                                router.push("/sign-in");
                              }}
                              className="h-10  rounded-md flex flex-auto"
                            >
                              Sign in
                            </Button>
                          )}
                          {!currentPath.startsWith("/sign-up") && (
                            <Button
                              onClick={() => {
                                router.push("/sign-up");
                              }}
                              className="h-10 rounded-md flex flex-auto"
                            >
                              Sign up
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <>
              <div className="flex mr-auto  ml-10">
                <NavigationLink title="Talent" link="/talent" />
              </div>
              <div className="flex items-center gap-2">
                {!user && (
                  <>
                    {" "}
                    {!currentPath.startsWith("/sign-in") && (
                      <Button
                        onClick={() => {
                          router.push("/sign-in");
                        }}
                        variant={"transparent_blue"}
                        className="h-8 rounded-full items-center group"
                      >
                        Sign in{" "}
                        <ChevronRight className=" w-4 h-4 ml-1 group-hover:translate-x-[2px] transition-all ease-in-out " />
                      </Button>
                    )}
                    {!currentPath.startsWith("/sign-up") && (
                      <Button
                        onClick={() => {
                          router.push("/sign-up");
                        }}
                        className="h-8  rounded-full"
                      >
                        Sign up
                      </Button>
                    )}
                  </>
                )}
                {user && (
                  <>
                    <Button
                      onClick={async () => {
                        await signOut(auth);
                      }}
                      variant={"transparent_blue"}
                      className="h-8 rounded-full items-center group"
                    >
                      Sign out{" "}
                      <LogOut className="ml-3 w-4 h-4  group-hover:translate-x-[2px] transition-all ease-in-out " />
                    </Button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default LandingPageNavbar;

const NavigationLink = ({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon?: React.ReactElement;
}) => {
  // ! Use Context
  const currentPath = usePathname();
  const router = useRouter();
  const { isMobile } = useUtilities();

  if (currentPath != link) {
    return (
      <>
        {isMobile ? (
          <>
            <span
              onClick={() => {
                router.push(link);
              }}
              className=" text-[15px] pb-3 border-b font-medium"
            >
              {title}
            </span>
          </>
        ) : (
          <>
            <div className=" flex h-8 items-center ">
              <Button
                onClick={() => {
                  router.push(link);
                }}
                variant={"transparent_link"}
                className=" font-normal"
              >
                {title}
                {icon}
              </Button>
            </div>
          </>
        )}
      </>
    );
  }
};
