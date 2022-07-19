import React from "react";
import "./SingleBox.css";

const SingleBox = ({ children }) => {
  return (
    <div className="single-box">
        {children}
    </div>
  );
};

export default SingleBox;
