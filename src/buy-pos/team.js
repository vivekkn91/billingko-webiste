import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import Nav from "./navaigationbar";
import logo from "../Billingko.jpg";
import Shop2 from "../components/assets/burger_king_shop.jpg";
import Shop from "./assets/outlticons/billingko_shop.png";
import Footor from "./footor";
import { Link } from "react-router-dom";

library.add(fab); // Add the font awesome brands icons to the library

export default function aboutus_page() {
  return (
    <>
      <Helmet>
        <title>Our Team | billingko</title>
        <meta
          name="description"
          content="Learn about Billingko and our mission to provide high-quality services and products. Connect with us on social media for the latest updates."
        />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Nav />
      <div className="display-flex">
        <div className=" margin-auto aboutus text-center">
          <h1>Coming soon</h1>
          <p>
            We are expanding join us . india's best restaurant management system
          </p>
          <div>
            <Link to="/career" className="button-link">
              <button className="buttongreen"> Join Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Footor /> */}
    </>
  );
}
