"use client";

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
} from "lucide-react";
import { useUser } from "@/context/authentication";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Account {
  label: string;
  email: string;
  icon: string;
}

interface AccountDropdownProps {
  isCollapsed: boolean;
}

export function Account({ isCollapsed }: AccountDropdownProps) {
  // ! Use Context
  const { user } = useUser();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 p-1 px-2  my-2 text-sm font-medium bg-secondary rounded-md ring-none outline-none",
          isCollapsed ? "p-0 bg-transparent justify-center m-3" : "w-full"
        )}
      >
        <Avatar className=" w-8 h-8 bg-transparent">
          <AvatarImage src={user?.photoURL ?? undefined} alt="User avatar" />
          <AvatarFallback>
            <User strokeWidth={1.2} className="w-8 h-8 p-1" />
          </AvatarFallback>
        </Avatar>
        {user && !isCollapsed && (
          <>
            <span className="flex-grow min-w-0 overflow-hidden  text-left text-ellipsis whitespace-nowrap">
              {user.email || "..."}
            </span>
            <ChevronsUpDown className="flex-shrink-0 w-4 h-4 opacity-50" />
          </>
        )}
        {!user && !isCollapsed && (
          <div className="flex-grow h-full w-full bg-secondary rounded-md animate-pulse" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        forceMount
        align="start"
        side="bottom"
        className="w-56"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem
          onClick={async () => {
            router.push("/pricing");
          }}
          className="flex cursor-pointer items-center "
        >
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Pricing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            const so = signOut(auth);
            toast.promise(so, {
              loading: "Signing out.",
              success: "Signed out succesfully.",
              error: "Unable to sign out.",
            });
            router.push("/");
          }}
          className="flex cursor-pointer items-center "
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
