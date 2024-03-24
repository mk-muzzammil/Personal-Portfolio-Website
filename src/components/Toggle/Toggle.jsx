import React from "react";
import styles from "./Toggle.module.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../context";
import { useContext } from "react";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={styles.Toggle} onClick={handleToggle}>
      <Moon />
      <Sun />
      <div
        className={styles.t_button}
        style={darkMode ? { left: "3px" } : { right: "3px" }}
      ></div>
    </div>
  );
};

export default Toggle;
