"use client";

import * as React from "react";
import {
  ChartArea,
  ChartBar,
  CircleUser,
  DollarSign,
  FolderOpen,
  GitGraph,
  Grid,
  HandCoins,
  HeartHandshake,
  Home,
  Landmark,
  UserCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useUser } from "@/context/authentication";
import { useRouter } from "next/navigation";
import { useUtilities } from "@/context/utility";
import LoadingScreen from "@/components/loading-screens/main-loading-screen";
import { Account } from "@/components/main/account";
import Topbar from "@/components/main/topbar";
import { Nav } from "@/components/main/sidebar-nav";
import WebsiteView from "@/components/main/website-view";
import { useWebsiteData, WebsiteProvider } from "@/context/website-data";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // ! Use Contexts
  const { user, loading } = useUser();
  const router = useRouter();
  const { isMobile } = useUtilities();

  // ! Variables
  const DEFAULT_LAYOUT = [15, 85];
  const NAV_COLLAPSED_SIZE = 3;

  // ! Use States
  const [isCollapsed, setIsCollapsed] = React.useState(isMobile ? true : false);

  // ! Use Effect
  React.useEffect(() => {
    if (!isCollapsed && isMobile) {
      setIsCollapsed(true);
    }
  }, [isCollapsed, isMobile]);

  // ! Security Check
  if (loading) {
    return <LoadingScreen />;
  }

  if (!user && !loading) {
    return router.push("/");
  }

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className=" max-h-screen min-h-screen h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={DEFAULT_LAYOUT[0]}
          collapsedSize={NAV_COLLAPSED_SIZE}
          collapsible={true}
          minSize={15}
          maxSize={18}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] max-w-[50px]  transition-all duration-300 ease-in-out",
            "h-screen flex flex-col"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] gap-2 items-center my-1 justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <WebsiteView isCollapsed={isCollapsed} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Home",
                label: "",
                icon: Home,
                variant: "default",
                link: "/home",
              },
              {
                title: "Analytics",
                label: "",
                icon: ChartBar,
                variant: "default",
                link: "/analytics",
              },
            ]}
          />
          <Separator />
          <div
            className={cn(
              " mt-auto justify-center flex px-2",
              !isCollapsed && "justify-start "
            )}
          >
            <Account isCollapsed={isCollapsed} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={DEFAULT_LAYOUT[1]}
          minSize={30}
          className=" max-h-screen h-screen"
        >
          <div
            className={cn(
              " h-[52px] w-full block flex-auto items-center ",
              isCollapsed ? "h-[52px]" : "",
              " "
            )}
          >
            <Topbar />
          </div>
          <ScrollArea className="h-[calc(100vh-52px)]">
            {children}
            <ScrollBar />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default MainLayout;
