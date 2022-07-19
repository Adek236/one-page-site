import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from '@mui/icons-material/Diamond';
import PersonIcon from '@mui/icons-material/Person';
import "./NavBar.css";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-mobile">
      <div>
          <PersonIcon />
        </div>
        <div>
          <DiamondIcon />
        </div>
        <div>
          <MenuIcon />
        </div>
      </nav>

      {/* 
      <nav className="nav-desktop">
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
      </nav>
      */}
    </div>
  );
}

export default NavBar;
