import React from "react";
import "./News.css";
import { MainNewsData as data } from "../../Data/Data";
// import Button from "../Button/Button";

const News = () => {
  return (
    <section
      className="news"
      style={{ backgroundImage: `url(${data[0].imgSmall})` }}
    >
      <div className="news__desc">
        <div className="news__desc__date">Date</div>
        <h2>Title News</h2>
      </div>
      <div className="news__blackout fill-container"></div>
      <a className="fill-container" href="/" />
    </section>
  );
};

export default News;
