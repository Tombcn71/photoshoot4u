"use client";
import { setCookie, hasCookie } from "cookies-next";
import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie("consent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie("consent", "true");

    // Trigger GTM script load
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("updateGTMConsent"));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="ml-0 shadow-2xl  flex fixed bottom-4 left-1/2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-2xl min-w-xs py-15 p-8 m-4 bg-black text-white flex flex-col items-center justify-center transform -translate-x-1/2">
      <div>
        <p>
          We use various standard analysis packages. These are some cookies. Do
          you agree with this?{" "}
        </p>
      </div>
      <div className="flex mt-2">
        <button
          onClick={acceptConsent}
          className="bg-purple-600 text-white px-4 py-2 rounded mr-2">
          Accept{" "}
        </button>
        <button
          onClick={declineConsent}
          className="bg-purple-600 text-white px-4 py-2 rounded">
          Decline{" "}
        </button>
      </div>
    </div>
  );
};
