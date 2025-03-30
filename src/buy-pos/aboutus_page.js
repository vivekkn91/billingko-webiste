import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import logo from "../Billingko.jpg";
import { Helmet } from "react-helmet";

import Nav from "./navaigationbar";
import Shop2 from "../components/assets/burger_king_shop.jpg";
import Shop from "./assets/outlticons/billingko_shop.png";
import Footor from "./footor";

library.add(fab); // Add the font awesome brands icons to the library

export default function aboutus_page() {
  return (
    <>
     <Helmet>
  <title>About Billingko - Restaurant Management Software & POS System</title>
  <meta 
    name="description" 
    content="Discover Billingko's mission to revolutionize restaurant management with innovative POS solutions. Learn about our vision, team, and commitment to empowering restaurants with efficient billing & operations software." 
  />
  <meta 
    name="keywords" 
    content="restaurant management software, POS system, Billingko, restaurant billing software, restaurant technology" 
  />
  <link rel="canonical" href="https://billingkopos.com/about" />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="About Billingko - Restaurant Management Software" />
  <meta property="og:description" content="Empowering restaurants with innovative POS and management solutions. Learn about Billingko's mission and vision." />
  <meta property="og:url" content="https://billingkopos.com/about" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo} />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Billingko - Restaurant POS Solutions" />
  <meta name="twitter:description" content="Empowering restaurants with innovative POS and management solutions. Learn about Billingko's mission and vision." />
  
  <link rel="icon" type="image/png" href={logo} />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Billingko",
        "url": "https://billingkopos.com",
        "logo": "https://billingkopos.com/Billingko.jpg",
        "description": "Restaurant management and POS software provider specializing in efficient billing solutions",
        "sameAs": [
          "https://www.facebook.com/billingkopos/",
          "https://www.instagram.com/restaurant_billing_app",
          "https://twitter.com/BillinkoP65972"
        ],
        "brand": {
          "@type": "Brand",
          "name": "Billingko",
          "slogan": "Revolutionizing Restaurant Management"
        }
      }
    `}
  </script>
</Helmet>
      <Nav />
      <div className="display-flex">
        <img
          src={Shop}
          alt="offline restaurant management software"
          className="width-40"
        />
        <div className="width-60 margin-auto aboutus">
          <h1> Who We Are</h1>
          <p>
            At our company, we are a team of dedicated professionals
            specializing in developing innovative restaurant management tools.
            With a deep understanding of the challenges faced by the restaurant
            industry, we strive to create solutions that streamline operations,
            improve efficiency, and enhance the overall dining experience.
          </p>
          <p>
            Easily handle billing processes, streamline table management,
            integrate with online food delivery platforms, and efficiently
            manage inventory and stock.
          </p>
          <p>
            Generate accurate invoices and process payments effortlessly. Assign
            tables, track occupancy, and manage reservations for an enhanced
            dining experience.
          </p>
          <p>
            Seamlessly manage online orders by integrating with popular delivery
            platforms. Simplify inventory management, track stock movement, and
            automate reordering.
          </p>
          <p>
            Enjoy the flexibility of running Billingko on unlimited devices,
            enabling you to manage your restaurant from anywhere.
          </p>
          <p>
            Enhance efficiency and maximize profitability with this
            user-friendly and robust software.
          </p>
        </div>
      </div>
      <div className="display-flex">
        <div className="width-60 margin-auto aboutus">
          <h1> Our vision</h1>
          <p>
            At our company, our vision is to empower food businesses and make
            them more profitable. We envision a future where our customers
            thrive in the competitive restaurant industry by leveraging our
            innovative solutions. By providing cutting-edge tools and
            technology, we aim to revolutionize the way food businesses operate,
            helping them achieve higher profitability, sustainability, and
            growth.
          </p>
          <h1>Our Mission</h1>
          <p>
            {" "}
            Our mission is to alleviate the workload of restaurant staff and
            enable them to focus on what they do best: delivering exceptional
            dining experiences. We strive to develop comprehensive and
            user-friendly software solutions that streamline restaurant
            operations, simplify processes, and optimize efficiency. By
            automating tasks, reducing manual work, and enhancing productivity,
            we aim to empower restaurants to increase their profitability,
            minimize costs, and create a seamless experience for their staff and
            customers alike.
          </p>

          <p>
            We are committed to understanding the unique challenges faced by the
            restaurant industry and continuously innovating our products to meet
            their evolving needs. By providing reliable, scalable, and intuitive
            solutions, we aim to be the go-to partner for food businesses
            worldwide, helping them thrive in an ever-changing market.
          </p>

          <p>
            Together, let's embark on a journey to transform the food industry,
            improve profitability, and create a positive impact on the success
            of our customers' businesses.
          </p>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/restaurant_billing_app">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon instagram-icon"
              />
            </a>
            <a href="https://www.facebook.com/billingkopos/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon facebook-icon"
              />
            </a>{" "}
            <a href="https://twitter.com/BillinkoP65972">
              <FontAwesomeIcon icon={faTwitter} className="icon twitter-icon" />
            </a>
          </div>
        </div>
        <img
          src={Shop2}
          alt="offline restaurant management software"
          className="width-40"
        />
      </div>
      <Footor />
    </>
  );
}
