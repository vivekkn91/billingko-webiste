import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="foot">
      <p>
        <a href="/privacy">Privacy Policy</a>
        &nbsp;&nbsp;|&nbsp;&nbsp; &copy;{currentYear} Billingko All Rights
        Reserved
      </p>
    </footer>
  );
}
