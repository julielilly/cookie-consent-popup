import Button from "./Button";
import { LiaCookieBiteSolid } from "react-icons/lia";

const CookieConsentPopup = () => {
  return (
    <div className="cookie-consent-popup">
      <div>
        <LiaCookieBiteSolid className="icon" />
        <span>&#215;</span>
      </div>
      <p>We use cookies to improve your user experience.</p>

      <Button />
    </div>
  );
};

export default CookieConsentPopup;
