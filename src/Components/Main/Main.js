import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <div className="main">
      <div>Mega Main</div>
      <div>{children}</div>
    </div>
  );
};

export default Main;
