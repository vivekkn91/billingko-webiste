import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import navfrom from "./buy-pos/assets/videos/restaurants.mp4";
import Slider3 from "./buy-pos/slider";
import Phone from "./buy-pos/phonenumber";
import Footor from "./buy-pos/uae-presents";
import Outlets from "./buy-pos/outlets";
import Hedar from "./buy-pos/navaigationbar";
import Payments from "./components/payments";
import Aboutus from "./buy-pos/aboutus";
import Foot from "./buy-pos/footor";
import logo from "./Billingko.jpg";
import Specaility from "./buy-pos/specaility";
function OutletManagementPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        {/* <meta
          name="description"
          content="billingko is the ultimate Restaurant Management Software in "
        /> */}
        <title>
          Billing Software & Management system For Restaurant | POS | Billingko
        </title>

        <meta
          name="description"
          content={`billingko is the ultimate Restaurant Management Software & POS, offering a comprehensive suite of features including hassle-free billing, efficient inventory management, streamlined vendor management, and easy reporting. With GST enabled, it provides a one-stop solution for all types of restaurant businesses. Experience the power of billingko and download our restaurant billing software today for a seamless and efficient operation of your restaurant.`}
        />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Hedar />
      <section className="display-flex  " style={{ position: "relative" }}>
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={navfrom} type="video/mp4" />
        </video>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the transparency as needed
          }}
        />
        <div className="intro-text  width-60 zindex">
          <h1 className="cure boldtext1">
            Cost-effective restaurant management system in small pricing
          </h1>
          <p className="pt">
            Our restaurant management system offers an exceptional value
            proposition with its affordable pricing plans. Designed to meet the
            needs of restaurants of all sizes, our platform provides
            comprehensive features and functionality at a competitive price.
            With transparent pricing, you can easily understand and budget for
            your restaurant management system expenses.
          </p>
          <p className="nex">
            Whether you're a small eatery or a large restaurant chain, our
            pricing structure ensures cost-effectiveness without compromising on
            quality and performance.{" "}
          </p>
          <p className="pt">
            Experience the benefits of streamlined operations, efficient
            inventory management, and enhanced customer engagement without
            breaking the bank. Choose our restaurant management system for a
            budget-friendly solution that delivers exceptional value.
          </p>
          <div className="text-center">
            <a
              href="https://billingkopos.com/"
              className="btn-get-started scrollto"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="width-40 zindex ">
          <form
            id="campaignForm"
            name="contact6"
            method="post" // Updated: Use uppercase "POST" for the method
          >
            <input type="hidden" name="form-name" value="contact6" />

            <p class="pt">
              Be part of the success story! Join the ranks of over 2000
              restaurants who have already embraced Billingko's cutting-edge
              tools to fuel their restaurant growth.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control fc--rounded mb-4" // Updated: Use "className" instead of "class"
              required
            />

            <input
              type="text"
              name="restaurant_name"
              placeholder="Restaurant Name"
              className="form-control fc--rounded mb-4" // Updated: Use "className" instead of "class"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control fc--rounded mb-4" // Updated: Use "className" instead of "class"
              required
            />

            <input
              type="text"
              name="phone_number"
              placeholder="Mobile / Whatsapp number"
              className="form-control fc--rounded mb-4" // Updated: Use "className" instead of "class"
              required
            />

            <div className="form-group mb-4"></div>

            <button
              className="btn btn-primary btn--rounded btn-block camp_form"
              type="submit"
              name="submit"
            >
              Request for Demo
              <i
                className="fa fa-spinner fa-spin fa-pulse"
                id="freedemo_icon"
              ></i>
            </button>
          </form>
        </div>
      </section>
      <Payments />
      <section className="slider-owl-outer">
        <div className="slider-owl">
          <h2 className="text-center">Our Clients</h2>
          <Slider3 />
        </div>
      </section>
      <section>
        <Aboutus />
      </section>
      <section>
        <Outlets />
      </section>
      <section className="gradient text-center">
        <h3>Considering Launching a Restaurant?</h3>
        <Phone />
      </section>
      <section>
        <Specaility />
      </section>
      <section className="footorcolor">
        {" "}
        <Footor />
      </section>
      <Foot />
    </>
  );
}

export default OutletManagementPage;
