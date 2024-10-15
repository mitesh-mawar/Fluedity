import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { useUtilities } from "@/context/utility";
import { BiMenu } from "react-icons/bi";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Cross1Icon } from "@radix-ui/react-icons";

const LandingPageNavbar = () => {
  // ! Use Context
  const router = useRouter();
  const { isMobile } = useUtilities();
  const currentPath = usePathname();

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
              height={32}
              className="rounded-full w-8 h-8"
              src="/quampi/logo.png"
              alt="Quampi logo"
            />
            <h1 className="text-lg md:text-xl font-medium">Quampi</h1>
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
                        height={32}
                        className="rounded-full w-8 h-8"
                        src="/quampi/logo.png"
                        alt="Quampi logo"
                      />
                      <h1 className="text-lg md:text-xl font-medium">Quampi</h1>
                    </div>
                    <div className=" ml-auto flex gap-3">
                      <ThemeToggle
                        variant="default"
                        className="h-8 w-8 rounded-md flex "
                      />
                      <SheetClose className="items-center flex ">
                        <Cross1Icon className=" w-5 h-5" />
                      </SheetClose>{" "}
                    </div>
                  </div>

                  <div className="py-4 px-5 flex flex-col gap-4">
                    <span
                      onClick={() => {
                        router.push("/pricing");
                      }}
                      className=" text-[15px] border-b pb-3 font-medium"
                    >
                      Pricing
                    </span>
                    <span
                      onClick={() => {
                        router.push("/pricing");
                      }}
                      className=" text-[15px] pb-3 border-b font-medium"
                    >
                      About
                    </span>
                    <div className="flex gap-3 w-full mb-2">
                      {!currentPath.startsWith("/sign-in") && (
                        <Button
                          onClick={() => {
                            router.push("/sign-in");
                          }}
                          className="h-10 font-light rounded-md flex flex-auto"
                        >
                          Sign in
                        </Button>
                      )}
                      {!currentPath.startsWith("/sign-up") && (
                        <Button
                          onClick={() => {
                            router.push("/sign-up");
                          }}
                          className="h-10 font-light  rounded-md flex flex-auto"
                        >
                          Sign up
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <>
              <div className=" mr-auto ml-10 flex gap-2 items-center">
                <Button
                  onClick={() => {
                    router.push("/pricing");
                  }}
                  variant={"link"}
                  className="font-light text-muted-foreground hover:text-foreground  hover:no-underline "
                >
                  Pricing
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle variant="default" className="h-8 w-8" />
                {!currentPath.startsWith("/sign-in") && (
                  <Button
                    onClick={() => {
                      router.push("/sign-in");
                    }}
                    className="h-8 font-light rounded-full"
                  >
                    Sign in
                  </Button>
                )}
                {!currentPath.startsWith("/sign-up") && (
                  <Button
                    onClick={() => {
                      router.push("/sign-up");
                    }}
                    className="h-8 font-light rounded-full"
                  >
                    Sign up
                  </Button>
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
