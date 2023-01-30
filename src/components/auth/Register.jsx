import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../baseUrl";
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Fragment>
      <div className="container-md mx-5 my-5 px-5 py-5">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"> Create Your Account</p>
        <div className="form">
          <div className="row mb-3">
            <label htmlFor="inputName3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputName3" className="col-sm-2 col-form-label">
              Surname
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword33"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-grid gap-2 justify-content-md-end">
            <button
              onClick={async () => {
                await axios
                  .post(BASEURL + "/create_user", {
                    name: name,
                    surname: surname,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                  })
                  .then((response) => {
                    if (
                      response.status === 200 ||
                      response.statusText === "OK"
                    ) {
                      window.location.href = "/list";
                    }

                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              className="btn btn-primary me-md-2"
            >
              Register
            </button>
          </div>
        </div>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
