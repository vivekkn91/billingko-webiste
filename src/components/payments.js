import React from "react";
import homeimg from "./assets/cofferestaurants.jpg";

import icecream from "./assets/icecreamshop.jpg";
import Foodtruck from "./assets/foodtruck-removebg-preview_prev_ui.png";

export default function payments() {
  return (
    <>
      <section className="payents display-flex">
        <div className="text-center width-60">
          <h1 className="margin-auto">
            Buy Billingko POS Budget-Friend and affordable pricing
          </h1>
          <p>
            Unlock the potential of your restaurant with affordable and
            intuitive software, automating your entire operation with ease.
          </p>
          <h2>&#8377;5000*</h2>
          <p className=""> life-time/per outlet no renewal required</p>

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
            href="https://web.whatsapp.com/send?phone=7558973998"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a>
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
