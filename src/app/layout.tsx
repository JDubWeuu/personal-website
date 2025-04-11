import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "./_components/Footer";
import Script from "next/script";
// import RouteListener from "@/utils/route-change";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonwu.dev"),
  openGraph: {
    siteName: "Jason Wu",
    type: "website",
    locale: "en_US",
    title: "Jason Wu",
    description: "Jason Wu's Portfolio",
    images: [
      {
        url: "cover_photo.jpeg",
        alt: "Jason Wu's website photo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Jason Wu",
  appleWebApp: {
    title: "Jason Wu",
    statusBarStyle: "default",
    capable: true,
  },
  keywords: [
    "jason",
    "wu",
    "jason wu",
    "next.js",
    "software development",
    "santa clara university",
    "scu",
    "machine learning",
    "data engineering",
    "software engineering",
    "react",
    "langchain",
    "visionairy",
    "nezerac",
    "postgresql",
    "python",
    "typescript",
    "javascript",
    "java",
    "c",
    "c++",
    "sql",
    "assembly",
    "ai engineer",
    "undergraduate",
  ],
  icons: {
    icon: "/assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="32edbeb1-6b22-4d2c-b417-88f2a17014fa"
        ></Script>
      </head>
      <body className={`${interSans.variable} antialiased min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
