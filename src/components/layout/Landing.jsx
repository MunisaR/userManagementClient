import React, { Component } from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">ArmeumDev</h1>
            <p className="blockquote">
              Create a profile delete and block other developers 🤣🤣🤣
            </p>
            <div className="d-grid gap-2 d-md-flex">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
