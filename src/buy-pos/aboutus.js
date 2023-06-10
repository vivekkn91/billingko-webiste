import React from "react";
import Shop from "./assets/outlticons/billingko_shop.png";

export default function Aboutus() {
  return (
    <div className="display-flex">
      <img
        src={Shop}
        alt="offline restaurant management software"
        className="width-40"
      />
      <div className="width-60 margin-auto aboutus">
        <p>
          Billingko is an all-inclusive offline restaurant management software
          offering a wide range of features to optimize your operations.
        </p>
        <p>
          Easily handle billing processes, streamline table management,
          integrate with online food delivery platforms, and efficiently manage
          inventory and stock.
        </p>
        <p>
          Generate accurate invoices and process payments effortlessly. Assign
          tables, track occupancy, and manage reservations for an enhanced
          dining experience.
        </p>
        <p>
          Seamlessly manage online orders by integrating with popular delivery
          platforms. Simplify inventory management, track stock movement, and
          automate reordering.
        </p>
        <p>
          Enjoy the flexibility of running Billingko on unlimited devices,
          enabling you to manage your restaurant from anywhere.
        </p>
        <p>
          Enhance efficiency and maximize profitability with this user-friendly
          and robust software.
        </p>
      </div>
    </div>
  );
}
