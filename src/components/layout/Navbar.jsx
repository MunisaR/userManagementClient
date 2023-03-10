import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ textDecoration: "none" }}
      >
        <div className="container-fluid">
          <Link to="/">armeumDev.</Link>
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
                <Link to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
