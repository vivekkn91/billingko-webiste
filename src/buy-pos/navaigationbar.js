import React, { useState } from "react";
import "./Navmenu.css";
import db from "./assets/img/billingko-removebg-preview.png";
import close from "./assets/close1437.jpg";
import { Link } from "react-router-dom";

const Navmenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
      <a href="/" className="navigation-logo">
        <img src={db} alt="billingko Logo" />
      </a>
      <div className={`navigation-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>

          <li>
            Our Products
            <ul className="sub-menu">
              <Link to="/restaurant-management-system-for-Dine-in">
                <li>Dine in</li>
              </Link>
              <Link to="/restaurant-management-system-for-QSR">
                <li>QSR</li>
              </Link>
              <Link to="/restaurant-management-system-for-Bakeries">
                <li>Bakeries</li>
              </Link>
              <Link to="/restaurant-management-system-for-Cloud-Kitchens">
                <li>Cloud Kitchens</li>
              </Link>
              <Link to="/restaurant-management-system-for-Food-Trucks">
                <li>Food Trucks</li>
              </Link>
              <Link to="/coffeeshop-cafe">
                <li>Cafe /coffee shop</li>
              </Link>
            </ul>
          </li>

          <Link to="/team">
            <li>Our Team</li>
          </Link>
          <Link to="/career">
            <li>Career</li>
          </Link>
          <Link to="/Free-Menu">
            <li>Digital Menu</li>
          </Link>
          <Link to="/blogs">
            <li>Blog</li>
          </Link>
        </ul>
        <div className="menu-actions">
          <div className="close-button" onClick={handleCloseMenu}>
            <img src={close} className="close-icon2" alt="Close" />
          </div>
        </div>
      </div>
      <a
        className="request-demo-button"
        href="https://web.whatsapp.com/send?phone=7558973998"
      >
        Request Demo
      </a>
      <a
        className="request-demo-button  displaynone"
        href="https://web.whatsapp.com/send?phone=7558973998"
      
      >
        Download Now
      </a>

      <div className="piazza-menu" onClick={handleMenuToggle}>
        <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navmenu;
