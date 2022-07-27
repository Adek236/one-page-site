import React, { useRef } from "react";
import "./Offers.css";
import { OffersData as data } from "../../Data/Data";
import Button from "../Button/Button";
import {
  useWindowWidth,
  getImageSizeByWidth,
} from "../../Controllers/controllers";

const Offers = ({ id, descSide }) => {
  const offersRef = useRef(null);
  const { windowWidth } = useWindowWidth(offersRef);
  const imageSize = getImageSizeByWidth(windowWidth);
  const whichDescSide = descSide === "right" ? "flex-end" : "flex-start";
  return (
    <section className="offers">
      <div 
        ref={offersRef}
        className="offers__image"
        style={{ backgroundImage: `url(${data[id][imageSize]})`,
        justifyContent: whichDescSide }}
      >
        {/* large screen */}
        <div className="offers__image__desc">
          <div className="offers__image__desc__info">
            <div className="offers__image__desc__info__prev-title text-shadow">{data[id].prevTitle}</div>
            <h2>{data[id].title}</h2>
            <p>
              {data[id].desc}
            </p>
          </div>
          <div className="offers__image__desc__btns">
            <Button title={data[id].btnTitle1} bgColor="secondary" />
            <Button title={data[id].btnTitle2}/>
          </div>
        </div>
      </div>
      {/* small screen  */}
      <div className="offers__desc">
        <div className="offers__desc__info">
          <div className="offers__desc__info__prev-title text-shadow">{data[id].prevTitle}</div>
          <h2>{data[id].title}</h2>
          <p>
            {data[id].desc}
          </p>
        </div>
        <div className="offers__desc__btns">
          <Button title={data[id].btnTitle1}/>
          <Button title={data[id].btnTitle2} bgColor="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
