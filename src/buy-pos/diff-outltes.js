import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import navfrom from "./assets/videos/dinein.mp4";
import Slider3 from "./slider";
import Phone from "./phonenumber";
import Footor from "./uae-presents";
import Outlets from "./outlets";
import logo from "../Billingko.jpg";
import Hedar from "./navaigationbar";
import Foot from "./footor";
import Aboutus from "./aboutus";
import Specaility from "./specaility";
function OutletManagementPage() {
  const currentYear = new Date().getFullYear();
  const { outletLabel } = useParams();
  const separatedLabel = outletLabel.replace(/-/g, " ");

  return (
    <>
      <Helmet>
        {/* <meta
          name="description"
          content="billingko is the ultimate Restaurant Management Software in "
        /> */}
        <title>{outletLabel} Management System | Billingko</title>

        <meta
          name="description"
          content={`billingko is the ultimate Restaurant Management Software, offering a comprehensive suite of features including hassle-free billing, efficient inventory management, streamlined vendor management, and easy reporting. With GST enabled, it provides a one-stop solution for all types of restaurant businesses. Experience the power of billingko and download our restaurant billing software today for a seamless and efficient operation of your restaurant.`}
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
            Restaurant Management System for {separatedLabel}
          </h1>

          <p className="pt">
            Introducing our all-in-one platform that revolutionizes the way
            restaurants operate and manage their business. From billing to stock
            management, Captain Ordering App to Kitchen Display Systems,
            customer loyalty programs to an integrated feedback app, and
            third-party online ordering integration to an online ordering
            website, we have it all covered on a single, unified platform.
          </p>
          <p className="pt">
            Introducing our specialized platform tailored for{" "}
            <span className="nex">
              restaurants, pubs, bars, cafes, QSRs (Quick-Service Restaurants),
              cake shops, bakeries, and ice-cream shops
            </span>
            . Our all-in-one solution is designed to cater to the unique needs
            of your food and beverage establishment, providing seamless
            operations and improved customer experiences.
          </p>
          <a
            href="https://billingkopos.com/"
            className="btn-get-started scrollto"
          >
            Explore
          </a>
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
        <h3>Considering Launching a {separatedLabel}?</h3>
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
