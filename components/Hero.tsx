import { Login } from "@/app/login/components/Login";
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className="flex flex-col items-center pt-10 
 ">
      <div className="absolute size-full "></div>

      <div className="flex flex-col lg:flex-row items-center  p-8 max-w-6xl w-full ">
        {" "}
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          {" "}
          <h1 className="text-5xl font-bold	pt-0">
            Generate stunning magazine-style photoshoots with AI
            <br />
          </h1>
          <p className="text-white text-xl">
            Upload selfies and do a magazine-style photoshoot from your phone or
            laptop safe time and money no need paying an expensive photographer
          </p>
          <div className="flex flex-col space-y-2"></div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0  ">
          <Login host={null} />
        </div>{" "}
      </div>
    </div>
  );
};
export default Hero;
