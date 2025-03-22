import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import brandname1 from "./assets/brands/1.png";
import brandname2 from "./assets/brands/2.png";
import brandname3 from "./assets/brands/3.png";
import brandname4 from "./assets/brands/4.png";
import brandname5 from "./assets/brands/1.png";
import brandname6 from "./assets/brands/2.png";
import brandname7 from "./assets/brands/3.png";
import brandname8 from "./assets/brands/4.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

const ClientLogosWithImport = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <OwlCarousel
      items={4} // Number of items to display in the carousel
      dots={false}
      loop={true} // Infinite loop
      autoplay={true}
      autoplayTimeout={3000} // Autoplay interval in milliseconds
      onIndexChanged={setActiveIndex} // Handler for active index change
      className="owl-theme"
      margin={20} // Gap between each image
      responsive={{
        // Responsive settings
        0: {
          items: 1, // Number of items to display at 0px breakpoint
        },
        576: {
          items: 2, // Number of items to display at 576px breakpoint
        },
        768: {
          items: 3, // Number of items to display at 768px breakpoint
        },
        992: {
          items: 4, // Number of items to display at 992px breakpoint
        },
      }}
    >
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname1} alt="Brand 1" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname2} alt="Brand 2" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname3} alt="Brand 3" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname4} alt="Brand 4" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname1} alt="Brand 4" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname6} alt="Brand 4" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname7} alt="Brand 4" />
      </div>
      <div
        className={`client-logo ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="slider0" src={brandname8} alt="Brand 4" />
      </div>
    </OwlCarousel>
  );
};

export default ClientLogosWithImport;
