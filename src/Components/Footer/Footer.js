import React from "react";
import "./Footer.css";
import DiamondIcon from "@mui/icons-material/Diamond";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <div className="title">
          <h3>OUR SOCIALS</h3>
        </div>
        <div className="icons">
          <ul>
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="others">
        <div className="logo">
          <DiamondIcon />
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
            <li>
              <a href="/">Api</a>
            </li>
          </ul>
        </nav>
        <div className="copyright text-shadow">2022 ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};

export default Footer;
