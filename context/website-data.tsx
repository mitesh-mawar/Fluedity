"use client";

import { auth, DB } from "@/config/firebase-config";
import {
  LiveWebsiteDetailsProps,
  WebsiteListingDetailsProps,
  WebsiteProps,
} from "@/types/website";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

interface WebsitesDataType {
  myWebsites: WebsiteListingDetailsProps[];
  activeWebsite: string | undefined;
  activeWebsiteHTML: string | undefined;
  liveActiveWebsiteData: LiveWebsiteDetailsProps | undefined;
  setActiveWebsite: React.Dispatch<React.SetStateAction<string | undefined>>;
  loading: boolean;
}

interface WebsiteProviderProps {
  children: ReactNode;
}

const WebsiteContext = createContext<WebsitesDataType | undefined>(undefined);

export const WebsiteProvider: React.FC<WebsiteProviderProps> = ({
  children,
}) => {
  const [myWebsites, setMyWebsites] = useState<WebsiteListingDetailsProps[]>(
    []
  );
  const [activeWebsite, setActiveWebsite] = useState<string | undefined>(
    undefined
  );
  const [activeWebsiteHTML, setActiveWebsiteHTML] = useState<
    string | undefined
  >(undefined);
  const [liveActiveWebsiteData, setLiveActiveWebsiteData] = useState<
    LiveWebsiteDetailsProps | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);
  const theUser = auth.currentUser;

  const fetchWebsiteData = useCallback(
    async (domain: string): Promise<WebsiteListingDetailsProps | null> => {
      try {
        const response = await fetch(`https://${domain}`, { mode: "cors" });
        const html = await response.text();

        const parser = new DOMParser();
        const parsedDoc = parser.parseFromString(html, "text/html");

        return {
          domain,
          title: parsedDoc.title || "",
          favicon:
            parsedDoc
              .querySelector('link[rel*="icon"]')
              ?.getAttribute("href") || "",
          description:
            parsedDoc
              .querySelector('meta[name="description"]')
              ?.getAttribute("content") || "",
        };
      } catch (error) {
        console.error(`Error fetching website ${domain}:`, error);
        return null;
      }
    },
    []
  );

  const fetchLiveWebsiteData = useCallback(
    async (domain: string): Promise<LiveWebsiteDetailsProps | undefined> => {
      try {
        setLoading(true);
        const startTime = performance.now();

        const response = await fetch(`https://${domain}`, { mode: "cors" });
        const html = await response.text();
        setActiveWebsiteHTML(html);

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const getLiveWebsiteData = (): LiveWebsiteDetailsProps => ({
          domain,
          title: doc.title || "",
          favicon:
            doc.querySelector('link[rel*="icon"]')?.getAttribute("href") || "",
          description:
            doc
              .querySelector('meta[name="description"]')
              ?.getAttribute("content") || "",
          open_graph: {
            title:
              doc
                .querySelector('meta[property="og:title"]')
                ?.getAttribute("content") || "",
            description:
              doc
                .querySelector('meta[property="og:description"]')
                ?.getAttribute("content") || "",
            image:
              doc
                .querySelector('meta[property="og:image"]')
                ?.getAttribute("content") || "",
            url:
              doc
                .querySelector('meta[property="og:url"]')
                ?.getAttribute("content") || "",
          },
          keywords:
            doc
              .querySelector('meta[name="keywords"]')
              ?.getAttribute("content")
              ?.split(",")
              .map((k) => k.trim()) || [],
          lastUpdated: new Date(),
          language: doc.documentElement.lang || "",
          author:
            doc.querySelector('meta[name="author"]')?.getAttribute("content") ||
            "",
          contentType:
            doc
              .querySelector('meta[http-equiv="Content-Type"]')
              ?.getAttribute("content") || "",
          robots:
            doc.querySelector('meta[name="robots"]')?.getAttribute("content") ||
            "",
          canonical:
            doc.querySelector('link[rel="canonical"]')?.getAttribute("href") ||
            "",
          structuredData: (() => {
            const scriptTags = doc.querySelectorAll(
              'script[type="application/ld+json"]'
            );
            let data = {};
            scriptTags.forEach((tag) => {
              try {
                Object.assign(data, JSON.parse(tag.textContent || ""));
              } catch (e) {
                console.error("Error parsing structured data:", e);
              }
            });
            return data;
          })(),
          socialMediaLinks: {
            facebook:
              doc
                .querySelector('a[href*="facebook.com"]')
                ?.getAttribute("href") ?? undefined,
            twitter:
              doc
                .querySelector('a[href*="twitter.com"]')
                ?.getAttribute("href") ?? undefined,
            linkedin:
              doc
                .querySelector('a[href*="linkedin.com"]')
                ?.getAttribute("href") ?? undefined,
            instagram:
              doc
                .querySelector('a[href*="instagram.com"]')
                ?.getAttribute("href") ?? undefined,
          },
          performanceMetrics: {
            loadTime: performance.now() - startTime,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
          },
        });

        return getLiveWebsiteData();
      } catch (error) {
        console.error("Error fetching live website data:", error);
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (activeWebsite) {
      fetchLiveWebsiteData(activeWebsite).then(setLiveActiveWebsiteData);
    } else {
      setActiveWebsiteHTML(undefined);
      setLiveActiveWebsiteData(undefined);
      setLoading(false);
    }
  }, [activeWebsite, fetchLiveWebsiteData]);

  useEffect(() => {
    if (!theUser) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const websiteCollectionRef = query(
      collection(DB, "Website"),
      where("created_by", "==", theUser.uid)
    );

    const unsubscribe = onSnapshot(websiteCollectionRef, async (snapshot) => {
      const websitePromises = snapshot.docs.map((doc) =>
        fetchWebsiteData(doc.id)
      );
      const websites = (await Promise.all(websitePromises)).filter(
        (site): site is WebsiteListingDetailsProps => site !== null
      );
      setMyWebsites(websites);
      if (!activeWebsite) {
        setActiveWebsite(websites[0].domain);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [theUser, fetchWebsiteData]);

  const value = {
    myWebsites,
    loading,
    activeWebsite,
    setActiveWebsite,
    activeWebsiteHTML,
    liveActiveWebsiteData,
  };

  return (
    <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>
  );
};

export const useWebsiteData = () => {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error("useWebsiteData must be used within a WebsiteProvider");
  }
  return context;
};
