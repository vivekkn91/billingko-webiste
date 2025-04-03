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
    {
      type: "Quick Service Restaurants",
      label: "QSR",
      image: qsr,
      description:
        "Efficient POS system for fast-paced quick service restaurants",
      alt: "Quick Service Restaurant POS System",
    },
    {
      type: "Cafe",
      label: "Cafe",
      image: coffee,
      description: "Complete cafe management solution with integrated billing",
      alt: "Cafe Management Software",
    },
    {
      type: "Cloud Kitchens",
      label: "Cloud Kitchens",
      image: kitchen,
      description:
        "Streamlined operations for cloud kitchen and delivery businesses",
      alt: "Cloud Kitchen Management System",
    },
    {
      type: "Food Trucks",
      label: "Food Trucks",
      image: foodtruck,
      description:
        "Mobile POS system perfect for food trucks and mobile vendors",
      alt: "Food Truck POS Software",
    },
    {
      type: "Bakery",
      label: "Bakery",
      image: bakery,
      description: "Specialized bakery management with inventory tracking",
      alt: "Bakery Management System",
    },
    {
      type: "Ice Cream Parlors",
      label: "Ice Cream",
      image: ice,
      description:
        "Complete POS solution for ice cream shops and dessert parlors",
      alt: "Ice Cream Shop POS System",
    },
    {
      type: "Pubs & Bars",
      label: "Pubs & Bars",
      image: beer,
      description: "Bar management system with drink menu and tab tracking",
      alt: "Pub and Bar Management Software",
    },
    {
      type: "Fine Dining Restaurants",
      label: "Fine Dining",
      image: table,
      description: "Advanced restaurant POS for fine dining establishments",
      alt: "Fine Dining Restaurant Management System",
    },
  ];

  return (
    <section className="outlet-types">
      <h1 className="text-center">
        Restaurant Management System for All Food Business Types
      </h1>
      <div className="container">
        <p className="text-center">
          Billingko provides specialized POS and management solutions tailored
          for different types of food service businesses - from quick service to
          fine dining
        </p>
        <div className="card-containerx">
          {outlets.map((outlet, index) => {
            const urlLabel = outlet.label.toLowerCase().replace(/\s+/g, "-");
            const url = `/restaurant-management-system-for-${urlLabel}`;

            return (
              <Link
                to={url}
                key={index}
                className="outlet-card-link"
                title={`Learn more about ${outlet.type} Management System`}
              >
                <article className="cardx">
                  <img
                    src={outlet.image}
                    alt={outlet.alt}
                    width="80"
                    height="80"
                  />
                  <div className="card-content">
                    <h2>{outlet.type}</h2>
                    <p>{outlet.description}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutletTypes;
