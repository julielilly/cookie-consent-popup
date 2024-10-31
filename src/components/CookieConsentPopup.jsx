import CookieConsentPopupCTA from "./CookieConsentPopupCTA";
import { LiaCookieBiteSolid } from "react-icons/lia";

const CookieConsentPopup = () => {
  return (
    <div className=" bg-[#0a0a0a] text-[#ededed] dark:bg-[#ededed] dark:text-[#0a0a0a] w-[250px] m-6 p-6 rounded-lg flex flex-col gap-4 absolute right-0 bottom-0 z-1">
      <div className="flex justify-between items-start">
        <LiaCookieBiteSolid className="text-5xl scale-x-[-1] mb-8" />
        <span className="text-2xl leading-6 cursor-pointer">&#215;</span>
      </div>
      <p className="max-w-[15ch]">We use cookies to improve your user experience.</p>

      <CookieConsentPopupCTA ctatext="I like Cookies" />
    </div>
  );
};

export default CookieConsentPopup;
