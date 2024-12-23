import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UtilityContextProvider } from "@/context/Utilities/utility";
import { AuthProvider } from "@/context/User-Data/authentication";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  PROJECT_AUTHOR,
  PROJECT_DESCRIPTION,
  PROJECT_KEYWORDS,
  PROJECT_NAME,
  PROJECT_URL,
} from "@/data/app/metadata";
import { ThemeProvider } from "@/context/Other/theme";

// ! Fonts
const Interr = Inter({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["500", "400", "300", "200", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(PROJECT_URL),
  title: {
    default: PROJECT_NAME,
    template: `%s | ${PROJECT_NAME}`,
  },
  description: PROJECT_DESCRIPTION,
  keywords: PROJECT_KEYWORDS,
  authors: [{ name: PROJECT_AUTHOR, url: PROJECT_URL }],
  creator: PROJECT_AUTHOR,
  publisher: PROJECT_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/quampi/logo.png",
    apple: "/quampi/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROJECT_URL,
    siteName: PROJECT_NAME,
    title: PROJECT_NAME,
    description: PROJECT_DESCRIPTION,
    images: [
      {
        url: `${PROJECT_URL}/openGraph/og-image-light.png`,
        width: 1200,
        height: 630,
        alt: `${PROJECT_NAME} - Interactive Journey Showcase`,
      },
      {
        url: `${PROJECT_URL}/openGraph/og-image-dark.png`,
        width: 1200,
        height: 630,
        alt: `${PROJECT_NAME} - Interactive Journey Showcase (Dark Mode)`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miteshmawar",
    creator: "@miteshmawar",
    title: PROJECT_NAME,
    description: PROJECT_DESCRIPTION,
    images: [`${PROJECT_URL}/openGraph/twitter-image.png`],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "apple-mobile-web-app-title": PROJECT_NAME,
  },
  alternates: {
    canonical: PROJECT_URL,
    languages: {
      "en-US": `${PROJECT_URL}/en-US`,
      "es-ES": `${PROJECT_URL}/es-ES`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  url: PROJECT_URL,
  applicationCategory: "LifestyleApplication",
  genre: "Personal Branding",
  about: {
    "@type": "Thing",
    description: "Interactive personal journey and portfolio showcase",
  },
  featureList: [
    "Interactive Money Grid",
    "Project Showcase",
    "Sponsorship Opportunities",
    "Personal Profile",
  ],
  screenshot: `${PROJECT_URL}/openGraph/app-screenshot.png`,
  author: {
    "@type": "Person",
    name: PROJECT_AUTHOR,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ! Variables
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID;

  return (
    <html lang="en" suppressHydrationWarning>
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
                <div className="max-w-screen w-screen">{children}</div>
              </TooltipProvider>
            </UtilityContextProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
