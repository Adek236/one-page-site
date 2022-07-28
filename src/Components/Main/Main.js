import React, { useRef} from "react";
import "./Main.css";
import { MainNewsData as data } from "../../Data/Data";
import Button from "../Button/Button";
import {
  useWindowWidth,
  getImageSizeByWidth,
} from "../../Controllers/controllers";

const Main = ({ id, children }) => {
  const mainRef = useRef(null);
  const { windowWidth } = useWindowWidth(mainRef);
  const imageSize = getImageSizeByWidth(windowWidth);
  return (
    <main ref={mainRef} className="main">
      {console.log("a", windowWidth)}
      <section>
        <div
          className="main__image"
          style={{ backgroundImage: `url(${data[id][imageSize]})` }}
        >
          {/* large screen */}
          <div className="main__image__blackout fill-container"></div>
          <div className="main__image__title">
            {/* both screen */}
            <h1>{data[id].title}</h1>
          </div>
          <p className="main__image__desc">{data[id].description}</p>
          <div className="main__image__buttons">
            <Button title={data[id].btnTitle1} bgColor="secondary" />
            <Button title={data[id].btnTitle2}/>
          </div>
        </div>
        {/* small screen  */} 
        <p>{data[id].description}</p>
        <div className="main__buttons">
          <Button title={data[id].btnTitle1} bgColor="secondary" />
          <Button title={data[id].btnTitle2}/>
        </div>
      </section>

      <h2>Latest news:</h2>
      <div>{children}</div>
    </main>
  );
};

export default Main;
