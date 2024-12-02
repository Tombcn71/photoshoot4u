import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Gallery from "@/components/gallery";
import { Login } from "./login/components/Login";
import Faqslist from "@/components/Faqslist";
export const dynamic = "force-dynamic";
import HeroFashion from "@/components/HeroFashion";
import Logos from "@/components/Logos";

import Image from "next/image";

import Hero5 from "@/components/Hero5";
export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="flex flex-col items-center   ">
      <div className="bg-cover pb-18">
        {" "}
        <Hero5 />
      </div>

      <div className="bg-black">
        {" "}
        <Gallery />
        <div className="">
          <ExplainerSection />
          <Faqslist />
          <PricingSection />
        </div>
      </div>
    </div>
  );
}
