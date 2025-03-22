import React from "react";
import ReactDOM from "react-dom";

import Tabs from "./tabs";
import Panel from "./panel";

import { Link } from "react-router-dom";
// import { events } from "./data";

// import "./styles.css";

const myInfluencers = [33, 81];

const userId = 4;

export default function Lsir() {
  return (
    <Tabs>
      <Panel title="All">
        <div className="margin-two font-24 Mulish-Bold black">
          Topics to Cover
        </div>

        <div className="dispaly-flex box-cover ">
          <Link to="/why-buy-a-pos">
            <div className="box">
              <div className="Inner-box"></div>
              <span style={styles.black}>
                1. Benefits of buying a Restaurant Billing POS
              </span>{" "}
              <br />
              <span style={styles.green}>
                Lets Learn about why restaurant billing software is important in
                food business
              </span>
            </div>{" "}
          </Link>
          <Link to="/how-to-use-pos">
            <div className="box">
              <div className="Inner-box"></div>
              <span style={styles.black}>
                2. Learn how to use restaurant pos software
              </span>{" "}
              <br />
              <span style={styles.green}>
                Let's learn how we can use a pos software for bill printing in a
                restaurant. how a receptionist create a bill when a order is
                placed
              </span>
            </div>
          </Link>
          <Link to="/choose-a-Restaurant-Billing-Software-Systems">
            <div className="box">
              <div className="Inner-box"></div>
              <span style={styles.black}>
                3. How to Choose the Right Restaurant Billing Software for Your
                Business
              </span>{" "}
              <br />
              <span style={styles.green}>
                Find out what factors to consider when selecting a restaurant
                billing software that meets your specific needs and budget.
              </span>
            </div>
          </Link>
        </div>

        <div className="dispaly-flex box-cover">
          <Link to="/Restaurant-Billing-Software-vs-Point-of-Sale-Systems">
            <div className="box">
              <div className="Inner-box"></div>
              <span style={styles.black}>
                4. Restaurant Billing Software vs. Traditional Point-of-Sale
                Systems
              </span>{" "}
              <br />
              <span style={styles.green}>
                Explore the differences between restaurant billing software and
                traditional point-of-sale systems, and why the former may be a
                better choice for your business.
              </span>
            </div>
          </Link>{" "}
          <Link to="/Ten-Practical-Ways-for-Restaurants-to-Tackle-Wastage-in-2023">
            <div className="box">
              <div className="Inner-box"></div>
              <span style={styles.black}>
                5. Ten Practical Ways for Restaurants to Tackle Wastage in 2023
              </span>{" "}
              <br />
              <span style={styles.green}>
                Get tips on how to smoothly integrate restaurant billing
                software into your operations, train your staff, and avoid
                common pitfalls.
              </span>
            </div>
          </Link>
          <div className="box">
            <div className="Inner-box"></div>
            <span style={styles.black}>
              6. The Future of Restaurant Billing Software
            </span>{" "}
            <br />
            <span style={styles.green}>
              Learn about the latest trends and innovations in restaurant
              billing software, and how they may shape the future of the
              industry.
            </span>
          </div>
        </div>
      </Panel>
      <Panel title="Food">
        {/* {events
          .filter((event) => event.host_id !== userId)
          .map((event) => {
            return <div key={event.id}>{event.title}</div>;
          })} */}
      </Panel>
    </Tabs>
  );
}
const styles = {
  green: { position: "relative", top: "10%", color: "#42bda1", right: "-4%" },
  black: {
    position: "relative",
    top: "10%",
    right: "-4%",
    fontSize: "18px",
    color: "#11142d",
  },
};
