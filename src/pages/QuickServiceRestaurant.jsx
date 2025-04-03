import React from "react";
import Nav from "../naviagation"; // Fixed import path
// import qsr from "../assets/outlticons/burger.png";

const QuickServiceRestaurant = () => {
  return (
    <>   <Hedar />
    <section className="outlet-page">
      <div className="container">
        <h1 className="text-center">
          Quick Service Restaurant Management System
        </h1>
        <div className="outlet-details">
          <img
            // src={qsr}
            alt="Quick Service Restaurant POS System"
            width="150"
            height="150"
          />
          <p>
            Our efficient POS system is designed for fast-paced quick service
            restaurants, ensuring seamless order processing, inventory
            management, and customer satisfaction.
          </p>
          <h2>Key Features:</h2>
          <ul>
            <li>Fast and easy order processing</li>
            <li>Integrated payment solutions</li>
            <li>Inventory and stock management</li>
            <li>Customer loyalty programs</li>
            <li>Real-time sales reporting</li>
          </ul>
        </div>
      </div>
    </section></>
  );
};

export default QuickServiceRestaurant;
