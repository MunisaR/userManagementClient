import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [status, setStatus] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchAllUsers = async () => {
    await axios
      .get("/users", {})
      .then((response) => {
        setStatus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const [auth, setAuth] = useState("");
  return (
    <Fragment>
      <div className="container-md mx-5 my-5 px-5 py-5">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">Sign into your Account</p>
        <h1 className="badge bg-danger p-2">{auth}</h1>
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
              id="inputPassword3"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="d-grid gap-2 justify-content-md-end">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={async () => {
              await axios
                .post("/login", {
                  email,
                  password,
                })
                .then((response) => {
                  if (response.status == 200 || response.statusText == "OK") {
                    axios
                      .post("/login_time", { email })
                      .then((r) => {
                        console.log(r);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                    if (response.data.status) {
                      window.location.href = "/list";
                    } else {
                      setAuth("you are not authorized");
                    }
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Sign in
          </button>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
