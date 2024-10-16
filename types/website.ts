import { Timestamp } from "firebase/firestore";

export interface WebsiteProps {
  created_at: Timestamp;
  created_by: string;
  domain: string;
}

export interface WebsiteListingDetailsProps {
  title: string;
  favicon: string;
  description: string;
  domain: string;
}

export interface LiveWebsiteDetailsProps {
  domain: string;
  title: string;
  favicon: string;
  description: string;
  open_graph: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  keywords: string[];
  lastUpdated: Date;
  language: string;
  author: string;
  contentType: string;
  robots: string;
  canonical: string;
  structuredData: Record<string, any>;
  socialMediaLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  performanceMetrics: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
  };
}
