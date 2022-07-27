import React, { useRef} from "react";
import "./Main.css";
import { MainNewsData as data } from "../../Data/Data";
import Button from "../Button/Button";
import {
  useWindowWidth,
  getImageSizeByWidth,
} from "../../Controllers/controllers";

const Main = ({ children }) => {
  const mainRef = useRef(null);
  const { windowWidth } = useWindowWidth(mainRef);
  const imageSize = getImageSizeByWidth(windowWidth);
  return (
    <main ref={mainRef} className="main">
      {console.log("a", windowWidth)}
      <section>
        <div
          className="main__image"
          style={{ backgroundImage: `url(${data[0][imageSize]})` }}
        >
          {/* large screen */}
          <div className="main__image__blackout fill-container"></div>
          <div className="main__image__title">
            {/* both screen */}
            <h1>{data[0].title}</h1>
          </div>
          <p className="main__image__desc">{data[0].description}</p>
          <div className="main__image__buttons">
            <Button bgColor="secondary" />
            <Button />
          </div>
        </div>
        {/* small screen  */}
        <p>{data[0].description}</p>
        <div className="main__buttons">
          <Button bgColor="secondary" />
          <Button />
        </div>
      </section>

      <h2>Latest news:</h2>
      <div>{children}</div>
    </main>
  );
};

export default Main;
