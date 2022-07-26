import React from "react";
import "./Guides.css";
import { GuidesData as data } from "../../Data/Data";

const Guides = ({ id }) => {
  return (
    <section className="guides">
      <div
        className="guides__image"
        style={{ backgroundImage: `url(${data[id].imgBig})` }}
      ></div>
      <div className="guides__desc"> 
        <div className="guides__desc__prev-title text-shadow">{data[id].prevTitle}</div>
        <h2>{data[id].title}</h2>
      </div>
      <a className="fill-container" href="/" > </a>
    </section>
  );
};

export default Guides;
