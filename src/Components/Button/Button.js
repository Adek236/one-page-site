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
        <a role="button" aria-labelledby={title} className="fill-container" href="/"> </a>
      </div>
    </div>
  );
};

export default Button;
