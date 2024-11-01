"use client";

import { useState } from "react";

// import CookieConsentPopupCTA from "./CookieConsentPopupCTA";
import { LiaCookieBiteSolid } from "react-icons/lia";

const CookieConsentPopup = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [isCookieConsentPopupOpen, setIsCookieConsentPopupOpen] = useState(true);

  return (
    !isCookieAccepted &&
    isCookieConsentPopupOpen && (
      <div className=" bg-[#0a0a0a] text-[#ededed] dark:bg-[#ededed] dark:text-[#0a0a0a] w-[250px] m-6 p-6 rounded-[15px] flex flex-col gap-4 absolute right-0 bottom-0 z-1">
        <div className="flex justify-between items-start">
          <LiaCookieBiteSolid className="text-5xl scale-x-[-1] mb-8" />
          <button
            onClick={() => {
              setIsCookieConsentPopupOpen(!isCookieConsentPopupOpen);
            }}
            className="text-2xl leading-6 ">
            &#215;
          </button>
        </div>
        <p className="max-w-[15ch] text-xl ">We use cookies to improve your user experience.</p>
        <button
          onClick={() => {
            setIsCookieAccepted(!isCookieAccepted);
          }}
          className=" bg-[#ededed] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#ededed] rounded-lg px-6 py-3">
          I like Cookies
        </button>
      </div>
    )
  );
};

export default CookieConsentPopup;
