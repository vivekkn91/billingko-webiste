import React from "react";
import homeimg from "./assets/cofferestaurants.jpg";

import icecream from "./assets/icecreamshop.jpg";
import Foodtruck from "./assets/foodtruck-removebg-preview_prev_ui.png";
import coffeshop from "./assets/coffeeshop.jpg";
import { Link } from "react-router-dom";

export default function payments() {
  return (
    <>
      <section className="payents display-flex">
        <div className="text-center width-60">
          <h1 className="margin-auto">
            Billingko Budget-Friend and affordable restaurant Management system
          </h1>
          <p>
            Unlock the potential of your restaurant with affordable and
            intuitive software, automating your entire operation with ease.
          </p>
          {/* <h2>&#8377;5000*</h2>
          <p className=" "> life-time/per outlet no renewal required</p> */}
          <a
            className="demo"
            href=" https://drive.google.com/file/d/18H22kqzTLoY4QiFNAt8c6Pa4_TmjZQW0/view?usp=sharing"
          >
            Download Now
          </a>
          {/* <a
            className="demo"
            href="https://web.whatsapp.com/send?phone=7558973998"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a> */}
        </div>
        <div className="width-40">
          <img className="width-100" src={homeimg} />
        </div>
      </section>
      <section className="payents display-flex">
        <div className="width-40">
          <img className="width-100" src={Foodtruck} />
        </div>
        <div className="text-center width-60">
          <h1> POS Solutions For Food Truck !</h1>
          <p>
            Master the art of efficient food truck operations management,
            empowering you to focus on elevating your brand!
          </p>
          <a
            className="demo"
            href=" https://drive.google.com/file/d/18H22kqzTLoY4QiFNAt8c6Pa4_TmjZQW0/view?usp=sharing"
          >
            Download Now
          </a>
        </div>
      </section>

      <section className="payents display-flex">
        <div className="text-center width-60">
          <h1> coffee shop management software </h1>
          <p>
            Best cafe and coffee shop management software for your business
            management.
          </p>
          <a
            className="demo"
            href="https://web.whatsapp.com/send?phone=7558973998"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a>
          <Link to="/coffeeshop-cafe">
            <a className="demo">Know more</a>
          </Link>
        </div>
        <div className="width-40">
          <img className="width-100" src={coffeshop} />
        </div>
      </section>
      <section className="payents display-flex">
        <div className="text-center width-60">
          <h1> Easy Ice Cream Shops POS Software </h1>
          <p>
            Unleash the power of efficient operations management for your ice
            cream shop, empowering you to take your brand to new heights!
          </p>
          <a
            className="demo"
            href="https://web.whatsapp.com/send?phone=7558973998"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a>
        </div>
        <div className="width-40">
          <img className="width-100" src={icecream} />
        </div>
      </section>
    </>
  );
}
