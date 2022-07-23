import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Modal.css";
// import { Link } from "react-router-dom";

function Modal({ showModal, setShowModal }) {
  const displayModal = showModal ? "flex" : "none";
  return (
    <div className="modal" style={{ display: displayModal }}>
      <div className="modal__container">
        <header className="flex-center">
          <nav>
            <div>
              <a href="/" className="flex-center">
                <PersonIcon />
              </a>
            </div>
            <div>
              <a href="/" className="flex-center">
                <DiamondIcon />
              </a>
            </div>
            <div className="flex-center" onClick={() => setShowModal(false)}>
              <CloseIcon />
            </div>
          </nav>
        </header>
        <main className="flex-center">
          <nav>
            <ul className="flex-center">
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
            </ul>
          </nav>
        </main>
        <footer className="flex-center">
          <div className="socials">
            <h3>OUR SOCIALS</h3>
          </div>
          <div className="socials-nav">
            <nav>
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
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
