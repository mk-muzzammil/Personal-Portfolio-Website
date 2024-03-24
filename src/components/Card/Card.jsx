import React from "react";
import "./Card.css";
import { themeContext } from "../../context";
import { useContext } from "react";
const Card = ({ image, primary, secondary }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card-wrapper"
      style={{ background: darkMode ? "#292727" : "" }}
    >
      <img src={image} alt="Card Image" />
      <span style={{ color: darkMode ? "white" : "" }} className="primaryText">
        {primary}
      </span>
      <span
        className="SecondaryText"
        style={{ color: darkMode ? "white" : "" }}
      >
        {secondary}
      </span>
      <button className="card-button">Learn More</button>
    </div>
  );
};

export default Card;
