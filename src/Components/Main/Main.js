import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import { MainNewsData as data } from "../../Data/Data";
import Button from "../Button/Button";

const Main = ({ children }) => {
  const mainImageRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     console.log("width: ", mainImageRef.current.offsetWidth);
  //     console.log("width WindoW: ", window.innerWidth);
  //   });
  // }, []);

  return (
    <main className="main">
      <section>
        <div
          ref={mainImageRef}
          className="main__image"
          style={{ backgroundImage: `url(${data[0].imgSmall})` }}
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
