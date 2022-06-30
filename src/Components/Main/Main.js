import React from "react";
import "./Main.css";
import { MainNewsData as data } from "../../Data/Data";

const Main = ({ children }) => {

  return (
    <div className="main">
      <img src={data[0].img} alt={data[0].alt} />
      <h1>{data[0].title}</h1>
      <p>{data[0].description}</p>

      <h2>Latest news:</h2>
      <div>{children}</div>
    </div>
  );
};

export default Main;
