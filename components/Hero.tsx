import { Login } from "@/app/login/components/Login";
import React from "react";

export const Hero = () => {
  return (
    <div className="bg-[url('/2.jpg')]">
      <div className="flex flex-col items-center  pt-16  ">
        <div className="absolute size-full "></div>
        <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
          <div className="flex flex-col space-y-4 lg:w-1/2 w-full ">
            <h1 className="text-5xl font-extrabold	  ">
              📸 Photoshoots for everyone
              <br />
            </h1>
            <p className="text-white text-xl">
              Create amazing photohoots with our AI Photogr! Generate photo
              content for your social media with AI. Save money and time and do
              an AI photo shoot from your phone or laptop no need paying an
              expensive photographer
            </p>
            <p className="text-xl underline leading-[2rem]">
              📸Upload selfies to create easy professional photohoots <br />
              ❤️Choose Photoshoot locations like Paris, Barcelona, Rome. <br />
              👗Wear designer clothes like cavalli, isabel morant, chanel <br />
              🤵🏽‍♂️Wear designer suits from armani, hugo boss, emilio zegna.
            </p>
            <div className="flex flex-col space-y-2"></div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 p-12 lg:mt-0  ">
            <Login host={null} />
          </div>
        </div>
      </div>
    </div>
  );
};
