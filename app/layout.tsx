import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Banner from "@/components/Banner";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
const CrispWithNoSSR = dynamic(() => import("@/components/crisp"));

import dynamic from "next/dynamic";
import { CookieConsent } from "@/components/CookieConsent";
export const metadata = {
  title: "Professionele portretfoto's maken met AI✨ | AIfotosessie.nl",
  description:
    " 👍 Ideaal voor sociale profielen, cv's en professionele cv's, makkelijk vanuit thuis of je werk, zonder studio of fotograaf",
};

export default function RootLayout({ children }: any) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="min-h-screen flex flex-col">
        <Banner />
        <CrispWithNoSSR /> <CookieConsent />
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <Navbar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
