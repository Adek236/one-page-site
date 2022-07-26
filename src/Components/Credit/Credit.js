import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Credit.css";
// import { Link } from "react-router-dom";

function Credit({ showCredit, setShowCredit }) {
  const displayCredit = showCredit ? "flex" : "none";
  return (
    <div className="credits" style={{ display: displayCredit }}>
      <div className="credits__wrapper flex-center">
        <div
          className="credits__wrapper__nav"
          onClick={() => setShowCredit(false)}
        >
          <CloseIcon />
        </div>
        <div className="credits__wrapper__lists">
          Credits:
          <ul>
            <li>
              <a href="https://pl.freepik.com/zdjecia/halloween">
                Halloween photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/concept-art">
                Concept art photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/doomsday">
                Doomsday photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/black-magic">
                Black magic photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/battlefield">
                Battlefield photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/fantasy">
                Fantasy photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/china-dragon">
                China dragon photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/scary">
                Scary photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/concept-art">
                Concept art photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/fiction">
                Fiction photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/fantasy">
                Fantasy photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/war-game">
                War game photo created by liuzishan - www.freepik.com
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/fiction">
                Fiction photo created by liuzishan - www.freepik.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Credit;
