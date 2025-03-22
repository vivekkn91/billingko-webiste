import React from "react";
import whatsappIcon from "./assets/whatsapp-icon.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="foot">
      <a href="https://wa.me/7558973998" className="whatsapp-icon">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
      <p>
        <a href="/privacy">Privacy Policy</a>
        &nbsp;&nbsp;|&nbsp;&nbsp; &copy;{currentYear} Billingko All Rights
        Reserved
      </p>
    </footer>
  );
}
