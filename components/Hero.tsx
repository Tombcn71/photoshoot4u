import React from "react";

export const Hero = () => {
  return (
    <div>
      <header>
        <meta charSet="utf-8" />
        <title>GeeksforGeeks</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </header>

      <div>
        <h1
          className="text-green-600 text-3xl 
                    font-bold">
          GeeksforGeeks
        </h1>
        <h3 className="text-xl text-white">
          Full Screen Background Video in Tailwind CSS
        </h3>
      </div>
      <header
        className="relative flex items-center 
                    justify-center h-screen mb-12 
                    overflow-hidden">
        <a
          href="https://geeksforgeeks.org"
          className="relative z-30 p-5 text-2xl 
                   text-white bg-green-400 bg-opacity-50
                   rounded-xl">
          GeeksforGeeks
        </a>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto 
                    min-w-full min-h-full max-w-none">
          <source
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
            type="video/mp4"
          />
        </video>
      </header>
    </div>
  );
};
