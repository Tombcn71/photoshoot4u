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
import Script from "next/script";
export const metadata = {
  title: "Professionele portretfoto's maken met AI✨ | AIfotosessie.nl",
  description:
    " 👍 Ideaal voor sociale profielen, cv's en professionele portfolios, makkelijk vanuit thuis of je werk, zonder studio of fotograaf",
};

export default function RootLayout({ children }: any) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PRW4T3L');
`,
          }}></Script>
      </head>
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
