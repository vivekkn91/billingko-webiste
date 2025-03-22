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
import Shop2 from "../assets/images/digitalmenu.png";
import Shop from "./assets/outlticons/billingko_shop.png";
import Shop3 from "../assets/images/instagaram.png";
import Shop4 from "../assets/images/menu2.png";
import Footor from "./footor";
import { Link } from "react-router-dom";

library.add(fab); // Add the font awesome brands icons to the library

export default function aboutus_page() {
  return (
    <>
      <Helmet>
        <title>Get Free digital menu for restaurant | billingko</title>
        <meta
          name="description"
          content=" are you starting a new restaurant with our billingko pos we provide
            free website and digital menu for your business"
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
            design your own
            <br />
            <span>
              Digital menu For <br />
              Your Restaurant
            </span>{" "}
          </h1>
          <p className="usap">
            Get a free digital menu for your restaurant management from
            billingko
          </p>
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
          <h3 className="usa span"> Billingko digital Restaurant menu </h3>
          <h4 className="green font-24">
            Boost your restaurant with Billlinko's Digital menu system
          </h4>
          <p className="usap">
            "In modern restaurants, paper menus are becoming a thing of the
            past. Instead, digital menus are now preferred, offering a more
            professional presentation. Billinko is on a mission to simplify this
            transition for restaurant owners. With Billlinko's Digital menu
            system, making changes, such as adding or removing food items, is
            incredibly easy. Say goodbye to the hassle of updating physical
            menus in the shop!"{" "}
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
            Add Digital Menu
            <br />
            <span>on Social Media</span>{" "}
          </h1>
          <p className="usap">
            Add Your Restaurant Digital Menu Link on Social Media!
          </p>
          <p>
            When customers have a digital copy of your restaurant menu, makes it
            easier for them to order the food even before reaching your
            restaurant. its always best to keep a copy of your menu upto date on
            your restaurant Website and social media
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
          <h3 className="usa span"> Change your restaurant menu any time </h3>
          <h4 className="green font-24">
            Change your restaurant menu with Billlinko's Digital menu system
          </h4>
          <p className="usap">
            Make changes to your menu at any time, let your customers know when
            a New item is added or the price has changed.
          </p>
        </div>
        <img
          src={Shop4}
          alt="offline restaurant management software"
          className="width-29"
        />
      </div>

      <Footor />
    </>
  );
}
