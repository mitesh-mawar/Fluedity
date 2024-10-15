"use client";

import { Button } from "@/components/ui/button";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { toast } from "sonner";
import { PROJECT_NAME, PROJECT_SUPPORT_EMAIL } from "@/data/quampi/metadata";
import LandingPageNavbar from "@/components/landing-page/navbar";

const SignUp = () => {
  // ! Use States
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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
                    Sign up to Quami
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Make analysis fun and useful
                  </p>
                </div>
              </div>
              <div className="py-5 w-full flex  justify-center">
                <div className="flex flex-col gap-2 flex-auto max-w-[300px]">
                  <Button
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      const provider = new GithubAuthProvider();
                      signInWithPopup(auth, provider)
                        .then((result) => {
                          const credential =
                            GithubAuthProvider.credentialFromResult(result);
                          if (credential) {
                            const token = credential.accessToken;
                            const user = result.user;
                            toast.success(`Welcome to ${PROJECT_NAME}`);
                          }
                        })
                        .catch((error) => {
                          console.error("Error signing in:", error);
                        });
                      setIsLoading(false);
                    }}
                    className="gap-2 border "
                    variant={"outline"}
                  >
                    <BsGithub className="w-5 h-5" /> Sign up with Github
                  </Button>
                  <Button
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      const provider = new GoogleAuthProvider();
                      provider.setCustomParameters({
                        login_hint: "user@example.com",
                      });
                      signInWithPopup(auth, provider)
                        .then(async (result) => {
                          const credential =
                            GoogleAuthProvider.credentialFromResult(result);
                          if (credential) {
                            toast.success(`Welcome to ${PROJECT_NAME}`);
                            const token = credential.accessToken;
                            const user = result.user;
                          }
                        })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          const email = error.customData.email;
                          const credential =
                            GoogleAuthProvider.credentialFromError(error);
                        });
                      setIsLoading(false);
                    }}
                    className="gap-2 border "
                    variant={"outline"}
                  >
                    <BiLogoGoogle className="w-4 h-4" /> Sign up with Google
                  </Button>
                </div>
              </div>
              <div className="flex flex-auto w-full justify-center">
                <p className="px-8 text-center md:max-w-[300px] text-sm text-muted-foreground">
                  Touble signing up?{" - "} email {PROJECT_SUPPORT_EMAIL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
