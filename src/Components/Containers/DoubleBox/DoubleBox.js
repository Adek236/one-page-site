import React from "react";
import "./DoubleBox.css";

const DoubleBox = ({ children }) => {
  return (
    <div className="double-box">
        {children}
    </div>
  );
};

export default DoubleBox;
