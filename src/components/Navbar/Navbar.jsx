import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import BarIcon from "@iconscout/react-unicons/icons/uil-bars";
import { themeContext } from "../../context";
import { useContext } from "react";
const Navbar = () => {
  const theme = useContext(themeContext);
  const dakrMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Muzzammil</div>
        <Toggle />
      </div>
      <div className="n-right">
        {/* <div id="barIcon">
          <BarIcon color={"var(--orange)"} size={"2rem"} />
        </div> */}
        <ul className="anchortagsContainer">
          <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to="Services" smooth={true}>
            <li>Services</li>
          </Link>
          <Link spy={true} to="Experience" smooth={true}>
            <li>Experience</li>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <li>Portfolio</li>
          </Link>
          <Link spy={true} to="Testimonials" smooth={true}>
            <li>Testimonial</li>
          </Link>
        </ul>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
