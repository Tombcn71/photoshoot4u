import { Login } from "@/app/login/components/Login";
import React from "react";

export const Hero = () => {
  return (
    <div
      className="flex flex-col items-center pt-0 bg-cover ')]
 ">
      <div className="absolute size-full "></div>
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full ">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold	">
            📷AI-generated magazine-style photoshoots 4u
            <br />
          </h1>
          <p className="text-white text-xl">
            Upload selfies and do a magazine-style photoshoot from your phone or
            laptop safe time and money no need paying an expensive photographer
          </p>
          <p className="text-xl underline leading-[2rem]">
            ✈️Model in iconic cities (Paris, Barcelona, Rome). <br />
            ❤️Wear luxury brands ( Chanel, Hermès, Louis Vuitton, Armani).{" "}
            <br />
            🚘Pose with supercars (Ferrari, Lamborghini, Bugatti).
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
