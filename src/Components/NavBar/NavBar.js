import React from "react";
import "./NavBar.css";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
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
  );
}

export default NavBar;
