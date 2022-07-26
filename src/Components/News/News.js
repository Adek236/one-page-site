import React from "react";
import "./News.css";
import { NewsData as data } from "../../Data/Data";

const News = ({ id }) => {
  return (
    <section
      className="news"
      style={{ backgroundImage: `url(${data[id].imgBig})` }}
    >
      <div className="news__desc">
        <div className="news__desc__date text-shadow">{data[id].date}</div>
        <h2>{data[id].title}</h2> 
      </div>
      <div className="news__blackout fill-container"></div>
      <a className="fill-container" href="/" > </a>
    </section>
  );
};

export default News;
