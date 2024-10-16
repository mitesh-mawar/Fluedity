"use client";

import { CircleIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { PROJECT_NAME, PROJECT_SUPPORT_EMAIL } from "@/data/quampi/metadata";
import LandingPageNavbar from "@/components/landing-page/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { DB } from "@/config/firebase-config";
import { useUser } from "@/context/authentication";
import { BiLoaderCircle } from "react-icons/bi";
import { WebsiteProps } from "@/types/website";

const AddWebsite = () => {
  // ! Use State
  const [domain, setDomain] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  // ! Use Context
  const { user } = useUser();
  const router = useRouter();

  // ! Function
  const handleAddDomain = async () => {
    if (domain && user) {
      setIsLoading(true);
      const checkResponse = await fetch("/api/check-domain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });
      const checkData = await checkResponse.json();
      if (checkResponse.ok) {
        if (checkData.exists) {
          const websiteDocRef = doc(DB, `Website/${domain}`);
          getDoc(websiteDocRef)
            .then((success) => {
              if (success.exists()) {
                if (success.data()) {
                  router.push(`/add-website-domain?domain=${domain}`);
                  setIsLoading(false);
                  return;
                }
              }
            })
            .catch((error) => {
              toast.error("Website already exists.");
            });
        } else {
          router.push(`/add-website-domain?domain=${domain}`);
        }
      } else {
        throw new Error(checkData.message || "Failed to check website.");
      }
      setIsLoading(false);
    }
  };

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
                <div className="flex flex-col text-center items-center">
                  <h1 className="text-3xl font-semibold tracking-tight">
                    Add Website Info
                  </h1>
                  <p className="text-sm text-muted-foreground max-w-[250px]">
                    Enter naked domain name without {"'www'"} or {"'https'"}.
                  </p>
                </div>
              </div>
              <div className="py-5 w-full flex  justify-center">
                <div className="flex  gap-2 flex-auto md:max-w-[400px]">
                  <Input
                    onChange={(e) => {
                      if (e.target.value) {
                        setDomain(e.target.value);
                      } else {
                        setDomain(undefined);
                      }
                    }}
                    placeholder="example.com"
                    className=" focus-visible:ring-secondary"
                  />{" "}
                  <Button
                    onClick={handleAddDomain}
                    disabled={!domain || isLoading}
                    className=" rounded-md"
                  >
                    {isLoading ? (
                      <>
                        <div className=" flex items-center">
                          Processing...{" "}
                          <BiLoaderCircle className="ml-3 animate-spin w-4 h-4" />
                        </div>
                      </>
                    ) : (
                      <>Add</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWebsite;
