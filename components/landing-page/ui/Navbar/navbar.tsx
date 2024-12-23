"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useUtilities } from "@/context/Utilities/utility";
import { BiMenu } from "react-icons/bi";
import { SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Cross1Icon } from "@radix-ui/react-icons";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { ChevronRight, LogOut } from "lucide-react";
import { useUser } from "@/context/User-Data/authentication";
import { Sheet } from "@/components/ui/sheet";
import { LandingPageNavbarDataProps } from "@/types/Utilities/Navbar/navbar";
import { cn } from "@/lib/utils";
import { FLUEDITY_LOGO } from "@/data/app/metadata";

export const NavbarPages: { title: string; href: string }[] = [
  {
    title: "Talent",
    href: "/talent",
  },
  {
    title: "Aim",
    href: "/aim",
  },
];

const LandingPageNavbar = () => {
  // ! Use States
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  // ! Use Context
  const router = useRouter();
  const { isMobile } = useUtilities();
  const currentPath = usePathname();
  const { user } = useUser();
  const { landingPageNavbarData, setLandingPageNavbarData } = useUtilities();

  // ! Use Refs
  // ** Navbar ref for taking details
  const navbarRef = useRef<HTMLDivElement>(null);

  // ! Use Effects
  useEffect(() => {
    if (navbarRef.current) {
      const background_color = navbarRef.current.style.backgroundColor;
      const data: LandingPageNavbarDataProps | undefined =
        landingPageNavbarData;

      if (background_color != data?.bg_color) {
        data?.bg_color == background_color;
      }

      if (data != landingPageNavbarData) {
        setLandingPageNavbarData(data);
      }
    } else {
      setLandingPageNavbarData(undefined);
    }
  }, [navbarRef]);

  // ** Checking if navbar is at the top
  useEffect(() => {
    if (typeof window != "undefined") {
      const handleScroll = () => {
        setIsAtTop(window.scrollY === 0);
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      ref={navbarRef}
      className={cn(
        "fixed top-0 z-[99999] w-full backdrop-blur-md bg-white/65 transition-all ease-in-out duration-300",
        !isAtTop ? "border-[#D1CDD0]  border-b-2" : " border-0"
      )}
    >
      <nav className="max-w-[1100px] mx-auto lg:px-0 px-[22px] py-3">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center z-[100] cursor-pointer gap-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="flex relative w-8 h-8 flex-col rounded-xl items-center">
              <Image
                layout="fill"
                objectFit="cover"
                alt="Fluedity"
                className="rounded-full aspect-square object-cover"
                src={FLUEDITY_LOGO}
              />
            </div>
            <h1 className="text-lg md:text-xl font-semibold">Fluedity</h1>
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
                        src={FLUEDITY_LOGO}
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
                    {NavbarPages.map((page, index) => (
                      <div key={index}>
                        <NavigationLink title={page.title} link={page.href} />
                      </div>
                    ))}
                    <div className="flex gap-3 w-full my-2 ">
                      {user && (
                        <>
                          <LogOutButton />
                        </>
                      )}
                      {!user && (
                        <>
                          {" "}
                          {!currentPath.startsWith("/sign-in") && (
                            <SignInButton />
                          )}
                          {!currentPath.startsWith("/sign-up") && (
                            <SignUpButton />
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
                {NavbarPages.map((page, index) => (
                  <div key={index}>
                    <NavigationLink title={page.title} link={page.href} />
                  </div>
                ))}
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

export const SignUpButton = () => {
  // ! Use Context
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/sign-up");
      }}
      className="h-10 rounded-md flex items-center flex-auto"
    >
      Sign up
    </Button>
  );
};

export const SignInButton = () => {
  // ! Use Context
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/sign-in");
      }}
      className="h-10  rounded-md flex flex-auto"
    >
      Sign in
    </Button>
  );
};

export const LogOutButton = () => {
  return (
    <Button
      className="h-8 flex flex-auto rounded-full"
      onClick={async () => {
        await signOut(auth);
      }}
    >
      Log out
    </Button>
  );
};

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
