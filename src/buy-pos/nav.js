import React, { useState } from "react";
import db from "./assets/img/billingko-removebg-preview.png";
import "./Navmenu.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import close from "./assets/close1437.jpg";

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={db} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
        <li className="menu-active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Strengths</a>
        </li>
        <Link to="/blogs">
          <li>Blogs</li>{" "}
        </Link>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Global Presence</a>
        </li>
        <li>
          <a href="#">Products</a>
          <ul className="submenu">
            <Link to="/restaurant-management-system-for-Dine-in">
              <li>
                <a href="">Dine in</a>
              </li>
            </Link>
            <Link to="/restaurant-management-system-for-QSR">
              <li>
                <a href="">QSR</a>
              </li>
            </Link>
            <Link to="/restaurant-management-system-for-Bakeries">
              <li>
                <a href="">Bakeries</a>
              </li>
            </Link>
            <Link to="/restaurant-management-system-for-Cloud-Kitchens">
              <li>
                <a href="">Cloud Kitchens</a>
              </li>
            </Link>
            <Link to="/restaurant-management-system-for-Food-Trucks">
              <li>
                <a href="">Food Trucks</a>
              </li>
            </Link>
          </ul>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <button
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <>
          <ul
            className="menu-items"
            style={{ position: "fixed", height: "100vh" }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Strengths</a>
            </li>
            <Link to="/blogs">
              <li>Blogs</li>{" "}
            </Link>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Global Presence</a>
            </li>
            <li>
              <a href="#">Products</a>
              <ul className="submenu">
                <Link to="/restaurant-management-system-for-Dine-in">
                  <li>
                    <a href="#">Dine in</a>
                  </li>
                </Link>
                <Link to="/restaurant-management-system-for-QSR">
                  <li>
                    <a href="#">QSR</a>
                  </li>
                </Link>
                <Link to="/restaurant-management-system-for-QSR">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                </Link>
                <Link to="/restaurant-management-system-for-Cloud-Kitchens">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                </Link>
                <Link to="/restaurant-management-system-for-Food-Trucks">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>{" "}
            <li>
              <img
                src={close}
                onClick={() => setIsMenuOpen(false)}
                className="close-icon2"
              />
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default NavMenu;
