import React, { useRef } from "react";
import "./News.css";
import { NewsData as data } from "../../Data/Data";
import {
  useWindowWidth,
  getImageSizeByWidth,
} from "../../Controllers/controllers";

const News = ({ id }) => {
  const newsRef = useRef(null);
  const { windowWidth } = useWindowWidth(newsRef);
  const imageSize = getImageSizeByWidth(windowWidth);
  return (
    <section
      ref={newsRef}
      className="news"
      style={{ backgroundImage: `url(${data[id][imageSize]})` }}
    >
      <div className="news__desc">
        <div className="news__desc__date text-shadow">{data[id].date}</div>
        <h2>{data[id].title}</h2>
      </div>
      <div className="news__blackout fill-container"></div>
      <a className="fill-container" href="/"> </a>
    </section>
  );
};

export default News;
