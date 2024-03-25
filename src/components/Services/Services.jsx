import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import heartEmoji from "../../img/heartemoji.png";
import GlasseEmoji from "../../img/glasses.png";
import humbleEmoji from "../../img/humble.png";
import resume from "../../Profile.pdf";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services-Wrapper" id="Services">
      <div className="services-left">
        <span>My Awesome</span>
        <span>Services</span>

        <span>
          I excel in crafting custom desktop and web applications,focused
          <br />
          on innovation and client satisfaction.
          <br />
          Elevate your online presence with my expert development services.
        </span>

        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="services-right">
        <div className="cards">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              image={heartEmoji}
              primary="Desktop App"
              secondary="Java, MySQl , Java-Swing"
            />
          </motion.div>
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              image={humbleEmoji}
              primary="Frontend Developer"
              secondary="HTML, CSS, Javascript, React JS"
            />
          </motion.div>
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ top: "18rem", left: "11rem" }}
          >
            <Card
              image={GlasseEmoji}
              primary="Backend Developer"
              secondary="React JS,Express JS ,Node JS, Mongo DB"
            />
          </motion.div>
        </div>
        <div className="s-blur1" style={{ background: "#C1F5FF" }}></div>
        <div className="s-blur2"></div>
      </div>
    </div>
  );
};

export default Services;
