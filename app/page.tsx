import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Faqslist from "@/components/Faqslist";
import { redirect } from "next/navigation";

import Gallery from "@/components/gallery";
import Hero5 from "@/components/Hero5";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <>
      {" "}
      <h1 className="text-6xl	">COMING SOON</h1>
    </>
  );
}
