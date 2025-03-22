import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const cities = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="footer">
      {cities.map((city) => (
        <div className="footer-link" key={city}>
          <Link
            to={`/best-restaurant-management-software-${city
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <span>{city}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
