import React from "react";
import { Link } from "react-router-dom";
export default function footor() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="footer-link">
          <Link to="/why-buy-a-pos">
            <span>Benefits and Features of restaurant pos</span>
          </Link>
        </div>{" "}
        <div className="footer-link">
          <Link to="/how-to-use-pos">
            <span>Learn to use a pos</span>
          </Link>{" "}
        </div>{" "}
        <div className="footer-link">
          <Link to="/Restaurant-Billing-Software-vs-Point-of-Sale-Systems">
            <span>Restaurant pos vs Traditional pos</span>
          </Link>{" "}
        </div>{" "}
        <div className="footer-link">
          <Link to="/choose-a-Restaurant-Billing-Software-Systems">
            <span>
              Choosing the Right Restaurant Point-of-Sale (POS) System
            </span>
          </Link>{" "}
        </div>
      </div>
      <footer className="foot">
        <p>
          <a href="/privacy">Privacy Policy</a>
          &nbsp;&nbsp;|&nbsp;&nbsp; &copy;{currentYear} Billingko All Rights
          Reserved
        </p>
      </footer>
    </>
  );
}
