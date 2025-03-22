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
import logo from "../Billingko.jpg";
import Nav from "./navaigationbar";
import Shop2 from "../assets/images/Brown_Modern_Visit_Our_Website_Video_Instagram_Post__1_-removebg-preview.png";
import Shop from "./assets/outlticons/billingko_shop.png";
import Shop3 from "../assets/images/Brown_Modern_Visit_Our_Website_Video_Instagram_Post__1_-removebg-preview.png";
import Shop4 from "../assets/images/menu2.png";
import Footor from "./footor";
import Our from "./ourpresents";
import { Link } from "react-router-dom";

library.add(fab); // Add the font awesome brands icons to the library

export default function aboutus_page() {
  return (
    <>
      <Helmet>
        <title>
          POS software for cafe | coffee shop management software| billingko
        </title>
        <meta
          name="description"
          content="boost your restaurant management  for your cafe and
            coffee shop with billingko"
        />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Nav />
      <div className="display-flex">
        <img
          src={Shop}
          alt="offline restaurant management software"
          className="width-40"
        />
        <div className="width-60 margin-auto aboutus">
          <h1 className="usa">
            POS for Cafe
            <span>
              {" "}
              <br />
              And coffee shop
            </span>{" "}
          </h1>
          <p className="usap">
            get the billingko restaurant management system for your cafe and
            coffee shop{" "}
          </p>
          <div>
            {" "}
            <a
              className="button-link"
              href=" https://drive.google.com/file/d/18H22kqzTLoY4QiFNAt8c6Pa4_TmjZQW0/view?usp=sharing"
            >
              <button className="buttongreen  usabutton"> Download now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="display-flex">
        <div className="width-60 margin-auto aboutus">
          <h3 className="usa span"> Restaurant Inventory management </h3>
          <h4 className="green font-24">
            Boost your restaurant with Billlinko's Inventory system
          </h4>
          <p className="usap">
            with easy Inventory management system mannage your coffee shop or
            cafe with ease no need of worring about item traking and purchasing
            everything is notifed by our system to the owner
          </p>
        </div>
        <img
          src={Shop2}
          alt="offline restaurant management software"
          className="width-29"
        />
      </div>

      <div className="display-flex">
        <img
          src={Shop3}
          alt="offline restaurant management software"
          className="width-40"
        />
        <div className="width-60 margin-auto aboutus">
          <h1 className="usa">
            Restaurant Billing
            <br />
            <span>and Invoicing</span>{" "}
          </h1>
          <p className="usap">easy billing for coffee shop and cafe</p>
          <p>
            no more slow billing and Invoicing in your Restaurant management
            with billinko print a bill in 3 simple steps under 10 seconds
          </p>{" "}
          <div>
            {" "}
            <Link to="/" className="button-link">
              <button className="buttongreen  usabutton">
                {" "}
                Get Free Trial
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="display-flex">
        <div className="width-60 margin-auto aboutus">
          <h3 className="usa span">
            {" "}
            Get free restaurant Digital menu with Pos{" "}
          </h3>
          <h4 className="green font-24">
            Change your restaurant menu with Billlinko's Digital menu system
          </h4>
          <p className="usap">
            Make changes to your menu at any time, let your customers know when
            a Latest Additions is added or the price has changed.
          </p>
        </div>
        <img
          src={Shop4}
          alt="offline restaurant management software"
          className="width-29"
        />
      </div>
      <Our />

      <Footor />
    </>
  );
}
