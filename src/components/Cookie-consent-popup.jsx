import Button from "./Button";
import { LiaCookieBiteSolid } from "react-icons/lia";

const CookieConsentPopup = () => {
  return (
    <div className="bg-white text-[color:--background] w-[250px] m-6 p-6 rounded-lg flex flex-col gap-4 absolute right-0 bottom-0 z-1">
      <div className="flex justify-between items-start">
        <LiaCookieBiteSolid className="text-5xl scale-x-[-1] mb-6" />
        <span className="text-2xl leading-6 cursor-pointer">&#215;</span>
      </div>
      <p className="max-w-[15ch]">We use cookies to improve your user experience.</p>

      <Button />
    </div>
  );
};

export default CookieConsentPopup;
