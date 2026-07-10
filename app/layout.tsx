import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClarityProvider from "@/components/Clarity";

export const metadata: Metadata = {
  metadataBase: new URL("https://lunecia.yukihirai.in"),

  verification: {
    google: "TmiFmTvQaOOsd4OL28HVWpOccShvC5hRtRx67PBbqi4",
  },

  title: {
    default: "Lunecia | AI Automation, Websites & SEO Agency",
    template: "%s | Lunecia",
  },

  description:
    "Lunecia helps businesses grow with AI automation, modern websites, SEO, and digital solutions that increase leads and revenue.",

  keywords: [
    "AI Agency",
    "AI Automation",
    "Website Development",
    "SEO",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lunecia.yukihirai.in",
    siteName: "Lunecia",
    title: "Lunecia | AI Automation, Websites & SEO Agency",
    description:
      "Grow your business with AI Automation, modern websites, and SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lunecia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lunecia | AI Automation, Websites & SEO",
    description: "AI Automation • Website Development • SEO",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData />

        <ClarityProvider />

        {children}

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}