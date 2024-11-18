import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});
const CrispWithNoSSR = dynamic(() => import("@/components/crisp"));

import dynamic from "next/dynamic";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata = {
  title: "Professional photoshoot with AI✨ | Photoshoot4u.com",
  description:
    " 👍 Generate amazing photohoots with our AI Photographer! Perfect for professional portfolios and social media. Save money and time",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className=" scroll-smooth">
      <GoogleTagManager
        gtmId="GTM-5PRW4T3L
"
      />

      <body className="  min-h-screen flex flex-col text-white  bg-black">
        {" "}
        <CrispWithNoSSR /> <CookieConsent />
        <Suspense
          fallback={
            <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
          }>
          <Navbar />
        </Suspense>{" "}
        <main className="flex flex-1 flex-col items-center py-16">
          {" "}
          <div className="absolute size-full">
            <Image src="/1.jpg" alt="background" fill className="size-full" />
          </div>
          {children}
        </main>{" "}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
