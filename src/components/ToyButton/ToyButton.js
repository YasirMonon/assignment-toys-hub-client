import React from "react";
import classes from "./ToyButton.module.css";
const ToyButton = ({ onClick, color, children, size, style }) => {
  const btnClasses = `${classes.btn} ${color === "green" ? classes["btn--green"] : classes["btn--white"]
    } ${size && classes["btn--lg"]}`;
  return (
    <button className={btnClasses} onClick={onClick} style={{ ...style }}>
      {children}
    </button>
  );
};

export default ToyButton;
