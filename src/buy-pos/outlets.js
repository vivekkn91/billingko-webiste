import React from "react";
import qsr from "./assets/outlticons/burger.png";
import bakery from "./assets/outlticons/bakery.png";
import beer from "./assets/outlticons/beer.png";
import coffee from "./assets/outlticons/coffee-cup.png";
import foodtruck from "./assets/outlticons/food-truck.png";
import ice from "./assets/outlticons/ice-cream.png";
import kitchen from "./assets/outlticons/kitchen.png";
import { Link } from "react-router-dom";
import table from "./assets/outlticons/table.png";

const OutletTypes = () => {
  const outlets = [
    { type: "Quick Service Restaurants", label: "QSR", image: qsr },
    { type: "Cafe", label: "Cafe", image: coffee },
    {
      type: "Cloud Kitchens",
      label: "Cloud Kitchens",
      image: kitchen,
    },
    { type: "Food Trucks", label: "Food Trucks", image: foodtruck },
    { type: "Bakery", label: "Bakery", image: bakery },
    { type: "Ice Cream Parlors", label: "Ice Cream", image: ice },
    { type: "Pubs & Bars", label: "Pubs & Bars", image: beer },
    {
      type: "Fine Dining Restaurants",
      label: "Fine Dining",
      image: table,
    },
  ];

  return (
    <div>
      <h1 className="text-center">Food Outlet Types</h1>
      <div className="card-containerx">
        {outlets.map((outlet, index) => {
          const urlLabel = outlet.label.replace(/\s+/g, "-");
          return (
            <Link
              to={`/restaurant-management-system-for-${urlLabel}`}
              key={index}
            >
              <div className="cardx">
                <img src={outlet.image} alt={outlet.type} />
                <div className="card-content">
                  <h3>{outlet.label}</h3>
                  <p>{outlet.type}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OutletTypes;
