import React, { useRef } from "react";
import "./Guides.css";
import { GuidesData as data } from "../../Data/Data";
import {
  useWindowWidth,
  getImageSizeByWidth,
} from "../../Controllers/controllers";

const Guides = ({ id }) => {
  const guidesRef = useRef(null);
  const { windowWidth } = useWindowWidth(guidesRef);
  const imageSize = getImageSizeByWidth(windowWidth);
  return (
    <section className="guides">
      <div
        ref={guidesRef}
        className="guides__image"
        style={{ backgroundImage: `url(${data[id][imageSize]})` }}
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
