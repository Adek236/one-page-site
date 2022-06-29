import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-mobile">
        <a href="/">logo</a>
        <a href="/">logo</a>
        <div>
          <MenuIcon />
        </div>
      </div>

      {/* 
      <div className="nav-desktop">
      <ul>
        <li>
          <a href="/"> HOME </a>
        </li>
        <li>
          <a href="/"> NEWS </a>
        </li>
        <li>
          <a href="/"> GAME </a>
        </li>
        <li>
          <a href="/"> HEROES </a>
        </li>
        <li>
          <a href="/"> SUPPORT </a>
        </li>
      </ul> 
      </div>
      */}
    </nav>
  );
}

export default NavBar;
