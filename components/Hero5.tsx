"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Gallery from "./gallery";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <>
      <section className="mt-14 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center pb-4 space-y-4">
          <h1 className="text-white font-bold text-5xl md:text-6xl">
            Create Magazine-style <br /> photoshoots with AI
          </h1>
          <p className="text-gray-400 max-w-xl text-lg mx-auto leading-relaxed">
            Upload selfies and do a magazine-style photoshoot from your phone or
            laptop safe time and money no need paying an expensive photographer
          </p>
        </div>
        <div>
          <p className="text-center pb-4 ">
            <Link href="/login">
              {" "}
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-3xl">
                Create your AI photoshoot now{" "}
              </button>
            </Link>
          </p>
        </div>{" "}
        <div></div>
      </section>
    </>
  );
};
