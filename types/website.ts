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

export interface QuampiWebEvent {

  // Time details
  timestamp: Timestamp;

  // Basic event information
  name: string;
  url: string;
  domain: string;
  referrer: string | null;

  // Screen and device information
  screenWidth: number;
  screenHeight: number;
  screenResolution: string;
  devicePixelRatio: number;

  // User agent and system information
  timezone: string;
  userAgent: string;
  language: string;
  cpuCores: number;
  operatingSystem: string;
  deviceType: 'desktop' | 'mobile' | 'tablet' | string;

  // Browser capabilities
  doNotTrack: string | null;
  cookiesEnabled: boolean;
  localStorageAvailable: boolean;
  sessionStorageAvailable: boolean;
  indexedDBAvailable: boolean;

  // Device capabilities
  colorDepth: number;
  deviceMemory?: number;

  // Network information
  connectionType?: string;
  roundTripTime?: number;
  downloadSpeed?: number;

  // Optional event-specific data
  revenue?: number;
  props?: {
    [key: string]: string | number | boolean;
    depth: number;
    url: string;
  };

  // Callback function (not sent in payload, but used in the script)
  callback?: (response: { status: number }) => void;
}