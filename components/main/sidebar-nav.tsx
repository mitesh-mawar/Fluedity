"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname, useRouter } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    link: string;
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost" | "purple";
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  // ! Use Context
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  aria-disabled={link.link.startsWith("/project")}
                  href={link.link}
                  className={cn(
                    link.link === currentPath
                      ? buttonVariants({ variant: "default", size: "sm" })
                      : buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-10 w-10 p-0",
                    link.link === currentPath &&
                      " bg-primary/20 border border-primary   "
                  )}
                >
                  <link.icon className="h-5 w-5" strokeWidth={1.5} />
                  <span className={cn("sr-only")}>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto  text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.link}
              className={cn(
                currentPath.startsWith(link.link)
                  ? buttonVariants({ variant: "default", size: "sm" })
                  : buttonVariants({ variant: "ghost", size: "sm" }),
                link.link === currentPath
                  ? " bg-secondary border text-[14px] font-semibold"
                  : "",
                "justify-start",
                "h-10"
              )}
            >
              <link.icon
                className={cn(
                  "mr-2 w-5 h-5",
                  link.variant == "purple" && "mr-2 h-5 w-5"
                )}
              />
              <span
                className={cn(
                  link.variant == "purple" &&
                    "h-auto text-[12px] flex text-wrap"
                )}
              >
                {" "}
                {link.title}
              </span>
              {link.label && (
                <span
                  className={cn(
                    "ml-auto ",
                    link.link === currentPath &&
                      "text-background dark:text-white",
                    "2xl:flex hidden",
                    link.variant == "purple" && "text-[12px]"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
