"use client";

import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import LandingPageNavbar from "@/components/landing-page/navbar";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PROJECT_URL } from "@/data/quampi/metadata";
import { BiCircleThreeQuarter, BiLoader, BiLoaderCircle } from "react-icons/bi";

const AddWebsiteDomain = () => {
  // ! Use State
  const [domain, setDomain] = useState<string | undefined>();
  const [installed, setInstalled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // ! Use Context
  const router = useRouter();
  const params = useParams();

  // ! Use Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const domainParam = urlParams.get("domain");
      setDomain(domainParam || undefined);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const domainParam = urlParams.get("domain");
        setDomain(domainParam || undefined);
      }
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    handleVerification();
  }, []);

  // ! Function
  const handleVerification = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://${domain}`);
      const html = await response.text();
      const isInstalled = html.includes(`https://quampi.vercel.app/quampi.js`);
      console.log(html, isInstalled);
      setInstalled(isInstalled);
    } catch (error) {
      setInstalled(false);
    }
    setLoading(false);
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
              <div
                className="ml-auto"
                onClick={() => {
                  router.push("/add-website");
                }}
              >
                <span className="text-[12px] transition-all ease-in-out duration-300 text-muted-foreground hover:text-foreground cursor-pointer">
                  <ArrowLeftIcon />
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 ">
              <div className="mx-auto flex w-full flex-col  justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col text-center items-center">
                  <h1 className="text-3xl  font-semibold tracking-tight">
                    Quampi installation
                  </h1>
                  <p className="text-[12px] text-muted-foreground ">
                    Copy and paste this snippet into the {"<head>"} section of
                    your site. Once done, click on the below button to verify
                    your installation.
                  </p>
                </div>
              </div>
              <div className="py-5 w-full flex flex-col items-center gap-3 justify-center">
                <div
                  onClick={() => {
                    window.navigator.clipboard.writeText(
                      `<Script async defer data-domain="${domain}" src="https://quampi.vercel.app/quampi.js"></Script>`
                    );
                    toast.success("Script copied");
                  }}
                  className="flex  gap-2 cursor-pointer flex-auto md:max-w-[400px]"
                >
                  <p className=" font-mono break-words text-wrap text-sm bg-secondary rounded-md p-2 leading-tight ">
                    {`<Script async defer data-domain="${domain}" src="https://quampi.vercel.app/quampi.js"></Script>`}
                  </p>
                </div>
                {!installed && (
                  <Button
                    disabled={loading}
                    onClick={handleVerification}
                    className="flex flex-auto w-full rounded-md mt-2 md:max-w-[400px]"
                  >
                    {loading ? (
                      <div className=" flex items-center">
                        Verifying...{" "}
                        <BiLoaderCircle className="ml-3 animate-spin w-4 h-4" />
                      </div>
                    ) : (
                      <>Verify</>
                    )}
                  </Button>
                )}
                {installed && (
                  <Button
                    variant={"secondary"}
                    disabled
                    className="flex flex-auto w-full rounded-md mt-2 md:max-w-[400px]"
                  >
                    Verified
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWebsiteDomain;
