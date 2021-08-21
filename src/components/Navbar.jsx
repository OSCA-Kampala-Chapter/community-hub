import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-pill">
        <div className="container px-5">
          <Link className="navbar-brand" to="/">
            Community <span className="bg-success px-2 text-white">Hub</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
