import React from "react";
import styles from "./Experience.module.css";
import { themeContext } from "../../context";
import { useContext } from "react";
const Experience = () => {
  const theme = useContext(themeContext);
  const dakrMode = theme.state.darkMode;
  return (
    <div className={styles.experience_wrapper} id="Experience">
      <div className={styles.achievement}>
        <div
          className={`${styles.circle} ${
            dakrMode ? styles.linearGradientBorder : ""
          }`}
          style={{
            color: dakrMode ? "var(--white)" : "",
            background: dakrMode ? "black" : "",
            border: dakrMode ? "5px solid var(--orange)" : "",
          }}
        >
          1.5+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className={styles.achievement}>
        <div
          className={styles.circle}
          style={{
            color: dakrMode ? "var(--white)" : "",
            background: dakrMode ? "black" : "",
            border: dakrMode ? "5px solid var(--orange)" : "",
          }}
        >
          15+
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className={styles.achievement}>
        <div
          className={styles.circle}
          style={{
            color: dakrMode ? "var(--white)" : "",
            background: dakrMode ? "black" : "",
            border: dakrMode ? "5px solid var(--orange)" : "",
          }}
        >
          2+
        </div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
