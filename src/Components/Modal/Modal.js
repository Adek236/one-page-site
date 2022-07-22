import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import "./Modal.css";
// import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="modal">
      <div className="modal__container">
        <div>
          <a href="/">
            <DiamondIcon />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/" className="text-shadow">
                HOME
              </a>
            </li>
            <li>
              <a href="/" className="text-shadow">
                NEWS
              </a>
            </li>
            <li>
              <a href="/" className="text-shadow">
                GUIDES
              </a>
            </li>
            <li>
              <a href="/" className="text-shadow">
                OFFERS
              </a>
            </li>
            <li>
              <a href="/" className="text-shadow">
                LOGIN
                <PersonIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Modal;
