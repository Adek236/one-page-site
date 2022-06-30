import React from "react";
import "./Main.css";
import { MainNewsData as data } from "../../Data/Data";

const Main = ({ children }) => {
  return (
    <main>
      {/* <img src={data[0].imgSmall} alt={data[0].alt} /> */}
      <section>
        <div
          className="main__image"
          style={{ backgroundImage: `url(${data[0].imgSmall})` }}
        >
          <div>
            <h1>{data[0].title}</h1>
          </div>
        </div>
        <p>{data[0].description}</p>
      </section>

      <h2>Latest news:</h2>
      <div>{children}</div>
    </main>
  );
};

export default Main;
