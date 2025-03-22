import React from "react";
import { ReactComponent as SEARCH } from "../Icons/SEARCH.svg";
import Lsir from "./table_list";
import { Helmet } from "react-helmet";
import logo from "../Billingko.jpg";
import Footor from "../buy-pos/ourpresents";

export default function pageOne() {
  return (
    <>
      <div className="card">
        <Helmet>
          <link rel="icon" type="image/png" href={logo} />
          <title>
            Why You Should Consider Restaurant POS System - Benefits and
            Features
          </title>
          <meta
            name="description"
            content="Discover the benefits and features of a restaurant POS system. Increase your billing efficiency and provide customers with more convenient payment options. Improve your restaurant's profitability with a customizable menu and pricing."
          />
          <meta
            name="keywords"
            content="restaurant POS system, billing efficiency, payment options, inventory management, customizable menu, pricing"
          />
        </Helmet>
        <div className="search-box">
          <div className="wrapper ">
            <SEARCH className="icon6 " />

            <input
              className="input6 background-grey"
              placeholder="Search Here .."
              // onChange={(e) => this.setState({ serchinput: e.target.value })}
              type="Search"
            />
          </div>
        </div>
        <Lsir />
      </div>
      {/* <Footor /> */}
    </>
  );
}
