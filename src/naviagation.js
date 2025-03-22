import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./home";
import PageTwo from "./components/pageTwo";
import USepos from "./components/usepos";
import Point from "./components/differrents";
import Choose from "./components/selectingpos";
import OutletManagementPage from "./buy-pos/diff-outltes";
import LocationMessage from "./buy-pos/buy-pos";
import About from "./buy-pos/aboutus_page";
import Career from "./buy-pos/career";
import Privacy from "./buy-pos/privacy";
import Wastage from "./buy-pos/blogs/reducewaste";
import Global from "./buy-pos/globalprecents";
import Team from "./buy-pos/team";
import CAfe from "./buy-pos/cafe";

function Navigator() {
  return (
    <Routes>
      <Route path="/blogs" element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/why-buy-a-pos" element={<PageTwo />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/how-to-use-pos" element={<USepos />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/Free-Menu" element={<Global />} />
      <Route path="/team" element={<Team />} />
      <Route path="/coffeeshop-cafe" element={<CAfe />} />
      <Route
        path="/Restaurant-Billing-Software-vs-Point-of-Sale-Systems"
        element={<Point />}
      />
      <Route
        path="/choose-a-Restaurant-Billing-Software-Systems"
        element={<Choose />}
      />
      <Route
        path="/best-restaurant-management-software-:location"
        element={<LocationMessage />}
      />
      <Route
        path="/restaurant-management-system-for-:outletLabel"
        element={<OutletManagementPage />}
      />
      <Route
        path="/Ten-Practical-Ways-for-Restaurants-to-Tackle-Wastage-in-2023"
        element={<Wastage />}
      />
    </Routes>
  );
}

export default Navigator;
