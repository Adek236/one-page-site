import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import "./NavBar.css";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-mobile">
        <div>
          <a href="/">
            <PersonIcon />
          </a>
        </div>
        <div>
          <a href="/">
            <DiamondIcon />
          </a>
        </div>
        <div>
          <MenuIcon />
        </div>
      </nav>

      <nav className="nav-desktop">
        <div className="flex-center">
          <a href="/" className="flex-center">
            <DiamondIcon />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" className="text-shadow"> HOME </a>
          </li>
          <li>
            <a href="/" className="text-shadow"> NEWS </a>
          </li>
          <li>
            <a href="/" className="text-shadow"> GUIDES </a>
          </li>
          <li>
            <a href="/" className="text-shadow"> OFFERS </a>
          </li>
          <li>
            <a href="/" className="text-shadow flex-center"> LOGIN <PersonIcon /> </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
