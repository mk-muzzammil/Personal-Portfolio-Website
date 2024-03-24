import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="Wave Footer" />
      <div className="f-content">
        <span>muzzammil759@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/mk_muzzammil786/">
            <Insta color={"white"} size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/mk-muzzammil/">
            <LinkedIn color={"white"} size={"3rem"} />
          </a>
          <a href="https://github.com/mk-muzzammil">
            <Github color={"white"} size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
