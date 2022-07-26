import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Credit.css";
// import { Link } from "react-router-dom";

function Credit({ showCredit, setShowCredit }) {
  //   const displayCredit = showCredit ? "flex" : "none";
  return (
    <div
      className="credit"
      // style={{ display: displayCredit }}
    >
      <div>
        <div
        // onClick={() => setShowCredit(false)}
        >
          <CloseIcon />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://pl.freepik.com/zdjecia/halloween">
                Halloween zdjęcie utworzone przez liuzishan - pl.freepik.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Credit;
