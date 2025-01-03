'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UtilityContextProvider } from "@/context/Utilities/utility";
import { AuthProvider } from "@/context/User-Data/authentication";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import { useState, useRef, useEffect } from 'react';
import type { AgentConnectionController } from '@play-ai/agent-web-sdk';
import {
  PROJECT_AUTHOR,
  PROJECT_DESCRIPTION,
  PROJECT_KEYWORDS,
  PROJECT_NAME,
  PROJECT_URL,
} from "@/data/app/metadata";
import { ThemeProvider } from "@/context/Other/theme";

const Interr = Inter({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["500", "400", "300", "200", "600", "700", "900"],
});

// Keep existing metadata and jsonLd...

function PlayAIButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const agentControllerRef = useRef<AgentConnectionController | null>(null);
  const AGENT_ID = 'Human-like-Mach--BQMnFsmif6AVjDoYkmZw';

  const connect = async () => {
    try {
      setIsLoading(true);
      const { connectAgent } = await import('@play-ai/agent-web-sdk');
      const agentController = await connectAgent(AGENT_ID, {
        listeners: {
          onUserStartedSpeaking: () => console.log('User started speaking'),
          onUserStoppedSpeaking: () => console.log('User stopped speaking'),
          onAgentStartedSpeaking: () => console.log('Agent started speaking'),
          onAgentStoppedSpeaking: () => console.log('Agent stopped speaking'),
          // @ts-ignore
          onHangup: (endedBy) => {
            console.log(`Call ended by ${endedBy}`);
            agentControllerRef.current = null;
            setIsConnected(false);
          },
          // @ts-ignore
          onError: (error) => {
            console.error('PlayAI Error:', error);
            setIsConnected(false);
          }
        }
      });

      agentControllerRef.current = agentController;
      setIsConnected(true);
    } catch (error) {
      console.error('Connection error:', error);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = () => {
    if (agentControllerRef.current) {
      agentControllerRef.current.hangup();
      agentControllerRef.current = null;
      setIsConnected(false);
    }
  };

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (agentControllerRef.current) {
        agentControllerRef.current.hangup();
      }
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={cn(
        "fixed bottom-4 right-1/2  backdrop:blur-lg translate-x-[50%] z-50 rounded-full p-4 shadow-lg transition-all",
        isLoading && "cursor-wait ",
        isConnected
          ? "bg-red-500 hover:bg-red-600   backdrop:blur-lg text-white"
          : "bg-blue-500 hover:bg-blue-600   backdrop:blur-lg text-white"
      )}
    >
      {isLoading ? 'Connecting...' : (isConnected ? 'Disconnect' : 'Tap to talk')}
    </button>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://unpkg.com/@play-ai/agent-web-sdk"
          strategy="afterInteractive"
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          Interr.className,
          "w-full overflow-x-hidden flex flex-auto justify-center"
        )}
      >
        <Analytics />
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            themes={["light"]}
            enableSystem
            disableTransitionOnChange
            storageKey={PROJECT_NAME || "theme"}
          >
            <Toaster position="bottom-center" />
            <UtilityContextProvider>
              <TooltipProvider>
                <div className="max-w-screen w-screen">
                  {children}
                  <PlayAIButton />
                </div>
              </TooltipProvider>
            </UtilityContextProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}