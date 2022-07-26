import React from "react";
import "./Button.css";

const Button = ({ title, bgColor }) => {
  return (
    <div className={
      bgColor === "secondary" ? "buttonOuter secondaryBorder" : "buttonOuter"
    }>
      <div
        className={
          bgColor === "secondary" ? "buttonInner secondaryBg" : "buttonInner"
        }
      >
        <div className="buttonTitle text-shadow">{title}</div>
        <a className="fill-container" href="/elo"> </a>
      </div>
    </div>
  );
};

export default Button;
