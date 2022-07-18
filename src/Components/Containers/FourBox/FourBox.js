import React from "react";
import "./FourBox.css";

const FourBox = ({ children }) => {
  return (
    <div className="four-box">
        {children}
    </div>
  );
};

export default FourBox;
