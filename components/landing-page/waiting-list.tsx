import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PROJECT_NAME } from "@/data/app/metadata";

const WaitingList = () => {
  // ! Variables
  const site = PROJECT_NAME;

  // ! Use State
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      function submitHandler(event) {
        event.preventDefault();
        var container = event.target.parentNode;
        var form = container.querySelector(".newsletter-form");
        var formInput = container.querySelector(".newsletter-form-input");
        var success = container.querySelector(".newsletter-success");
        var errorContainer = container.querySelector(".newsletter-error");
        var errorMessage = container.querySelector(".newsletter-error-message");
        var submitButton = container.querySelector(".newsletter-form-button");
        var loadingButton = container.querySelector(".newsletter-loading-button");

        submitButton.style.display = "none";
        loadingButton.style.display = "flex";

        var formBody = "userGroup=&mailingLists=&email=" + encodeURIComponent(formInput.value);
        fetch(event.target.action, {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => [res.ok, res.json(), res])
          .then(([ok, dataPromise, res]) => {
            if (ok) {
              success.style.display = "flex";
              form.reset();
            } else {
              dataPromise.then(data => {
                errorContainer.style.display = "flex";
                errorMessage.innerText = data.message
                  ? data.message
                  : res.statusText;
              });
            }
          })
          .catch(error => {
            errorContainer.style.display = "flex";
            if (error.message) errorMessage.innerText = error.message;
          })
          .finally(() => {
            formInput.style.display = "flex";
            loadingButton.style.display = "none";
            submitButton.style.display = "flex";
          });
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  // @ts-ignore
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsLoading(true);

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      // loops.so submission
      const formBody = `userGroup=${PROJECT_NAME}&mailingLists=&email=${encodeURIComponent(
        email
      )}&site=${encodeURIComponent(site)}&list=waitlist`;
      const response = await fetch(
        "https://app.loops.so/api/newsletter-form/cm0miuhu4025yfdtuz8c57k6w",
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Email added to waiting list.");
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to join waiting list");
      }
      // @ts-ignore
    } catch (error: any) {
      toast.error(
        error.message || "Failed to join waiting list. Please try again."
      );
    } finally {
      setIsLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center  rounded-lg">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="rounded-md h-10 focus-visible:ring-secondary md:min-w-[300px] flex-grow"
          />
          <Button
            type="submit"
            disabled={isLoading}
            variant={"secondary"}
            className=" h-10"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>
      </form>
      {isSuccess && (
        <div className=" mt-2 text-sm">Thanks! We&apos;ll be in touch!</div>
      )}
    </div>
  );
};

export default WaitingList;
