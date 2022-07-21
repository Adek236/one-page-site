import React from "react";
import "./Guides.css";
import { MainNewsData as data } from "../../Data/Data";
// import Button from "../Button/Button";

const Guides = () => {
  return (
    <section className="guides">
      <div
        className="guides__image"
        style={{ backgroundImage: `url(${data[0].imgSmall})` }}
      ></div>
      <div className="guides__desc">
        <div className="guides__desc__prev-title text-shadow">Prev Title</div>
        <h2>Title Guide</h2>
      </div>
      <a className="fill-container" href="/" > </a>
    </section>
  );
};

export default Guides;
