import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import hero from "/public/hero.png";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Gallery from "@/components/gallery";
import { Login } from "./login/components/Login";
import Faqslist from "@/components/Faqslist";
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
    <div className="flex flex-col items-center   pt-16 ">
      <div className="absolute size-full"></div>
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-extrabold	">
            📸 Photoshoots for everyone
            <br />
          </h1>
          <p className="text-white text-xl">
            Upload selfies to create easy professional photohoots with our AI
            app! Perfect for professional portfolios and social media. Save
            money and time and do an AI photoshoot from your phone or laptop no
            need paying an expensive photographer
          </p>
          <p className="text-xl underline leading-[2rem]">
            ❤️Choose Photoshoot locations like Paris, Barcelona, Rome. <br />
            👗Wear designer clothes like cavalli, isabel morant, chanel <br />
            👜Wear designer handbags like hermes, louis vuitton
            <br />
            🤵🏽‍♂️Wear designer suits from armani, hugo boss. <br />
            🚘Pose with luxury cars like ferrari, lamborghini, bugatti
          </p>
          <div className="flex flex-col space-y-2"></div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0  ">
          <Login host={null} />
        </div>
      </div>
      <Gallery />
      <ExplainerSection />

      <Faqslist />
      <PricingSection />

      <div></div>
    </div>
  );
}
