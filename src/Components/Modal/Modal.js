import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Modal.css";

function Modal({ showModal, setShowModal }) {
  const displayModal = showModal ? "flex" : "none";
  const modalRef = useRef(null);

  const backgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div
      className="modal"
      style={{ display: displayModal }}
      onClick={(e) => backgroundClick(e)}
      onAnimationEnd={() => modalRef.current.focus()}
    >
      <div className="modal__container">
        <header className="flex-center">
          <nav aria-label="Primary">
            <div>
              <a
                role="button"
                aria-label="Login"
                ref={modalRef}
                href="/"
                className="flex-center"
              >
                <PersonIcon />
              </a>
            </div>
            <div>
              <a
                role="button"
                aria-label="Home page"
                href="/"
                className="flex-center"
              >
                <DiamondIcon />
              </a>
            </div>
            <div
              role="button"
              aria-label="Close modal"
              tabIndex="0"
              className="close-btn flex-center"
              onClick={() => setShowModal(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setShowModal(false);
                }
              }}
            >
              <CloseIcon />
            </div>
          </nav>
        </header>
        <main className="flex-center">
          <nav aria-label="Secondary">
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
            <nav aria-label="Third">
              <ul>
                <li>
                  <a role="button" aria-label="Facebook" href="/">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a role="button" aria-label="Instagram" href="/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    aria-label="Twitter"
                    onKeyDown={(e) => {
                      if (e.key === "Tab") {
                        modalRef.current.focus();
                      }
                    }}
                    href="/"
                  >
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
