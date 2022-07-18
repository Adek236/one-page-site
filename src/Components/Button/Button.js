import React from "react";
import "./Button.css";

const Button = ({ bgColor }) => {
  return (
    <div className={
      bgColor === "secondary" ? "buttonOuter secondaryBorder" : "buttonOuter"
    }>
      <div
        className={
          bgColor === "secondary" ? "buttonInner secondaryBg" : "buttonInner"
        }
      >
        <div className="buttonTitle">Button</div>
        <a href="/elo"> </a>
      </div>
    </div>
  );
};

export default Button;
