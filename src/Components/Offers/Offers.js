import React from "react";
import "./Offers.css";
import { MainNewsData as data } from "../../Data/Data";
import Button from "../Button/Button";

const Offers = ({ descSide }) => {

  const whichDescSide = descSide === "right" ? "flex-end" : "flex-start";

  return (
    <section className="offers">
      <div
        className="offers__image"
        style={{ backgroundImage: `url(${data[0].imgSmall})`,
        justifyContent: whichDescSide }}
      >
        {/* large screen */}
        <div className="offers__image__desc">
          <div className="offers__image__desc__info">
            <div className="offers__image__desc__info__prev-title text-shadow">Prev title</div>
            <h2>Title Offers</h2>
            <p>
              Short description offer Short description offer Short description
              offer Short description offer Short description offer Short
              description offer
            </p>
          </div>
          <div className="offers__image__desc__btns">
            <Button bgColor="secondary" />
            <Button />
          </div>
        </div>
      </div>
      {/* small screen  */}
      <div className="offers__desc">
        <div className="offers__desc__info">
          <div className="offers__desc__info__prev-title text-shadow">Prev title</div>
          <h2>Title Offers</h2>
          <p>
            Short description offer Short description offer Short description
            offer Short description offer Short description offer Short
            description offer
          </p>
        </div>
        <div className="offers__desc__btns">
          <Button />
          <Button bgColor="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
