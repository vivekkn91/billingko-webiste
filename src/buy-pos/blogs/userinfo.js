import React from "react";
import vivek from "./img/vivek.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="social-media-icons  sidesocail">
        <div className="user-image">
          <img src={vivek} alt="User" className="rounded-image" />
        </div>
        <div className="user-name">vivek kn</div>
        <div className="user-position">Developer</div>
        <a href="https://www.instagram.com/vivekkn96/">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
        <a href="https://www.facebook.com/vivekkn91">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/vivek-kn-68b4a1169/">
          <FontAwesomeIcon icon={faLinkedin} className="icon twitter-icon" />
        </a>
      </div>
    </div>
  );
}
