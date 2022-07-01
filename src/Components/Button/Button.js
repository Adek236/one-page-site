import React from "react";
import "./Button.css";

const Button = ( { bgColor } ) => {
  console.log(bgColor)
  let btnBgColor = "";
  if (bgColor === "primary") {

    btnBgColor = "rgb(182, 123, 123)";
    // btnBgColor = "$btnColorPrimary";
  }

  return (
    <div className="buttonOuter">
      <div className="buttonInner" style={{backgroundColor: btnBgColor}}>
        <div className="buttonTitle">
          Button
        </div>
        <a href="/elo"></a>
      </div>
    </div>
  )
}

export default Button;