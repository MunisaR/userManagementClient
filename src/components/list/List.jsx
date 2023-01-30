import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import moment from "moment/moment.js";
import axios from "axios";
import { BASEURL } from "../../baseUrl";
const users = [];

const List = () => {
  const [all_users, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    await axios
      .get(BASEURL + "/users")
      .then((res) => setAllUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Container className="m-5 p-5">
        <Table bordered>
          <thead>
            <tr className="table-primary">
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Register time</th>
              <th></th>
            </tr>
          </thead>
          {all_users.map((user) => {
            const { _id, name, surname, email, last_login, register_time } =
              user;
            return (
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      value={user._id}
                      onChange={(e) => {
                        users.push(e.target.value);
                        console.log(users);
                      }}
                    ></input>
                  </td>
                  <td>{name}</td>
                  <td>{surname}</td>
                  <td>{email}</td>
                  <th>{user.loginTime}</th>
                  <th>{user.registerTime}</th>
                  <span
                    className={`m-1 badge ${
                      user.status ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {user.status ? "Active" : "Blocked"}
                  </span>
                  <span
                    role="button"
                    className="m-1 badge bg-info"
                    onClick={async () => {
                      await axios
                        .post(BASEURL + "/block_user", {
                          id: user._id,
                          status: user.status,
                        })
                        .then((response) => {
                          window.location.reload();
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Block
                  </span>
                  <span
                    role="button"
                    className="m-1 badge bg-warning"
                    onClick={async () => {
                      await axios
                        .post(BASEURL + "/delete_user", {
                          id: _id,
                        })
                        .then((response) => {
                          if (response.statusText == "OK") {
                            window.location.reload();
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Delete
                  </span>
                </tr>
              </tbody>
            );
          })}
        </Table>
        <center>
          <button
            type="button"
            className="m-2 btn btn-danger"
            onClick={async () => {
              await axios
                .post(BASEURL + "/delete_all_users")
                .then((response) => {
                  window.location.reload();
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Delete all users
          </button>
          <button
            type="button"
            className="m-2 btn btn-warning"
            onClick={async () => {
              await axios
                .post(BASEURL + "/delete_selected_users", { id: users })
                .then((response) => {
                  if (response.statusText == "OK") {
                    window.location.reload();
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Delete selected
          </button>
        </center>
      </Container>
    </>
  );
};

export default List;
