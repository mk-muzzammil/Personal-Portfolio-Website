import React from "react";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import BoyImage from "../../img/boy.png";
import crown from "../../img/crown.png";
import glassEmoji from "../../img/glassesimoji.png";
import { motion } from "framer-motion";
import "./intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import thumbsUp from "../../img/thumbup.png";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring", stiffness: 50 };
  return (
    <section className="i-section-wrapper">
      <div className="i-left">
        <div className="i-content">
          <span>Hy! I Am </span>
          <span>Muhammad Muzzammil</span>
          <span>
            Frontend Developer with High level experiece in web designing and
            web development.Currently engaged in learning MERN Stack.
          </span>
          <Link spy={true} to="Contact" smooth={true}>
            <button className=" button i-button">Hire Me</button>
          </Link>
        </div>

        <div className="i-icons">
          <a href="https://github.com/mk-muzzammil">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mk-muzzammil/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/mk_muzzammil786/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="Backdound1" />
        <img src={vector2} alt="Backdound2" />
        <img src={BoyImage} alt="My Image" />
        <motion.img
          initial={{ x: "-30%" }}
          animate={{ x: "-24%" }}
          transition={transition}
          src={glassEmoji}
          alt="Emoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", right: 0 }}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "23rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ bottom: "2%", left: "-27%" }}
        >
          <FloatingDiv image={thumbsUp} txt1="Best Design" txt2="Ever" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Intro;
