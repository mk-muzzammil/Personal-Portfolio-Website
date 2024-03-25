import React from "react";
import styles from "./Work.module.css";
import Upwork from "../../img/Upwork.png";
import Ozeito from "../../img/Ozeito.png";
import Fiverr from "../../img/fiverr.png";
import Wordpress from "../../img/Wordpress.png";
import Frontend_mentor from "../../img/FrontendMentor.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { themeContext } from "../../context";
import { useContext } from "react";
const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const circleVariants = {
    start: {
      rotate: 0,
      transition: {
        duration: 5, // Increase duration for slower animation
        type: "spring",
        ease: "linear",
      },
    },
    end: {
      rotate: 360,
      transition: {
        duration: 5, // Increase duration for slower animation
        type: "spring",
        ease: "linear",
      },
      transitionEnd: {
        rotate: 0,
      },
    },
  };
  return (
    <div className={styles.work_wrapper}>
      <div className={styles.work_left}>
        <span style={{ color: darkMode ? "white " : "" }}>
          Work For all These
        </span>
        <span>Brands and Clients</span>
        <span>
          With a proven track record of success, I partner with brands and
          clients to
          <br />
          deliver exceptional solutions, ensuring satisfaction and tangible
          results.
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className={styles.w_button}>Hire Me</button>
        </Link>
      </div>
      <div className={styles.work_right}>
        <motion.div
          variants={circleVariants}
          initial="start"
          animate="end"
          className={styles.w_main_circle}
        >
          <div className={styles.w_sec_circle}>
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className={styles.w_sec_circle}>
            <img src={Fiverr} alt="Fiver" />
          </div>
          <div className={styles.w_sec_circle}>
            <img className={styles.brand_ozeito} src={Ozeito} alt="Ozeito" />
          </div>
          <div className={styles.w_sec_circle}>
            <img className={styles.brand} src={Wordpress} alt="Wordpress" />
          </div>
          <div className={styles.w_sec_circle}>
            <img
              className={styles.brand}
              src={Frontend_mentor}
              alt="Frontend Mentor"
            />
          </div>
        </motion.div>
        <div className={`${styles.w_back_circle} ${styles.blue_Circle}`}></div>
        <div
          className={`${styles.w_back_circle} ${styles.yellow_Circle}`}
        ></div>
      </div>
    </div>
  );
};

export default Work;
