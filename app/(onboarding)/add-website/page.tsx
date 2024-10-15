"use client";

import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";
import { PROJECT_NAME, PROJECT_SUPPORT_EMAIL } from "@/data/quampi/metadata";
import LandingPageNavbar from "@/components/landing-page/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        {/* Navbar */}
        <LandingPageNavbar />
        <div className="my-auto w-full justify-center px-5  flex">
          <div className=" md:max-w-[500px]   border w-full flex flex-col flex-auto rounded-md">
            <div className="h-10 items-center flex flex-auto rounded-t-md px-5 bg-secondary border-b">
              <div className=" gap-1 flex">
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 ">
              <div className="mx-auto flex w-full flex-col  justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Add first website
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter naked domain name without {"'www'"} or {"'https'"}.
                  </p>
                </div>
              </div>
              <div className="py-5 w-full flex  justify-center">
                <div className="flex gap-2 flex-auto max-w-[300px]">
                  <Input /> <Button className=" rounded-md">Add</Button>
                </div>
              </div>
              <div className="flex flex-auto w-full justify-center">
                <p className="px-8 text-center md:max-w-[300px] text-sm text-muted-foreground">
                  Touble logging in?{" - "} email {PROJECT_SUPPORT_EMAIL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
