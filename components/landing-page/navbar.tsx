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
import { ChevronRight, House } from "lucide-react";
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
            <video
              width={32}
              autoPlay
              controls={false}
              loop
              height={32}
              className="rounded-full w-8 h-8 object-cover"
              src="https://cdn.dribbble.com/userupload/15363755/file/original-33c8fceaa8f1f12da02deb9ef182cafd.mp4"
            />
            <h1 className="text-lg md:text-xl font-medium">Fluedity</h1>
          </div>
          {isMobile ? (
            <>
              {currentPath.startsWith("/add-website-domain") && (
                <div
                  className="ml-auto mr-3"
                  onClick={() => {
                    router.push("/add-website");
                  }}
                >
                  <span className="text-[12px]  transition-all ease-in-out duration-300 text-muted-foreground hover:text-foreground cursor-pointer">
                    <ArrowLeftIcon className="w-5 h-5" />
                  </span>
                </div>
              )}
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
                        height={32}
                        className="rounded-full w-8 h-8"
                        src="/quampi/logo.png"
                        alt="Quampi logo"
                      />
                      <h1 className="text-lg md:text-xl font-medium">
                        Fluedity
                      </h1>
                    </div>
                    <div className=" ml-auto flex gap-3">
                      {/* <ThemeToggle
                        variant="default"
                        className="h-8 w-8 rounded-md flex "
                      /> */}
                      <SheetClose className="items-center flex ">
                        <Cross1Icon className=" w-5 h-5" />
                      </SheetClose>{" "}
                    </div>
                  </div>

                  <div className="py-4 px-5 flex flex-col gap-4">
                    {/* <span
                      onClick={() => {
                        router.push("/pricing");
                      }}
                      className=" text-[15px] border-b pb-3 font-medium"
                    >
                      Pricing
                    </span> */}
                    <span
                      onClick={() => {
                        router.push("/about");
                      }}
                      className=" text-[15px] pb-3 border-b font-medium"
                    >
                      About
                    </span>
                    <div className="flex gap-3 w-full mb-2">
                      {!user && (
                        <>
                          {" "}
                          {!currentPath.startsWith("/sign-in") &&
                            !currentPath.startsWith("/add-website") && (
                              <Button
                                onClick={() => {
                                  router.push("/sign-in");
                                }}
                                className="h-10 font-light rounded-md flex flex-auto"
                              >
                                Sign in
                              </Button>
                            )}
                          {!currentPath.startsWith("/sign-up") &&
                            !currentPath.startsWith("/add-website") && (
                              <Button
                                onClick={() => {
                                  router.push("/sign-up");
                                }}
                                className="h-10 font-light  rounded-md flex flex-auto"
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
              {/* <div className=" mr-auto ml-10 flex gap-2 items-center">
                <Button
                  onClick={() => {
                    router.push("/pricing");
                  }}
                  variant={"link"}
                  className="font-light text-muted-foreground hover:text-foreground  hover:no-underline "
                >
                  Pricing
                </Button>
              </div> */}
              <div className="flex items-center gap-2">
                {currentPath.startsWith("/add-website-domain") && (
                  <Button
                    onClick={() => {
                      router.push("/add-website");
                    }}
                    variant={"secondary"}
                    className="text-[12px] aspect-square h-8 rounded-full "
                  >
                    <ArrowLeftIcon className="aspect-square " />
                  </Button>
                )}
                {currentPath.startsWith("/add-website") && (
                  <>
                    <Button
                      className="h-8 w-8 p-0 font-light rounded-full"
                      onClick={async () => {
                        await router.push("/home");
                      }}
                    >
                      <BsHouse />
                    </Button>
                  </>
                )}
                {/* <ThemeToggle variant="default" className="h-8 w-8" /> */}
                {!user && (
                  <>
                    {" "}
                    {!currentPath.startsWith("/sign-in") &&
                      !currentPath.startsWith("/add-website") && (
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
                    {!currentPath.startsWith("/sign-up") &&
                      !currentPath.startsWith("/add-website") && (
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
                    {currentPath.startsWith("/add-website") && (
                      <>
                        <Button
                          className="h-8 font-light rounded-full"
                          onClick={async () => {
                            await signOut(auth);
                          }}
                        >
                          Log out
                        </Button>
                      </>
                    )}
                    <>
                      <Button
                        className="h-8  rounded-full"
                        onClick={async () => {
                          await signOut(auth);
                        }}
                      >
                        Log out
                      </Button>
                    </>
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
