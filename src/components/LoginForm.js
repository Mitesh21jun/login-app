import React, { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  // useEffect((e) => {

  // }, []);

  const submitForm = (e) => {
    e.preventDefault();

    if (username && password) {
      const getUsers = localStorage.getItem(username);
      const users = JSON.parse(getUsers);
      if (users) {
        setUser(users);
        if (!user) {
          submitForm(e);
        }
        if (password === user.password) {
          if (user.admin === true) {
            alert("Welcome Admin");
          } else {
            alert("Welcome User");
          }
          return <Link to={"/user-welcome"} username={username} />;
        }
      } else {
        alert("Invalid Username");
      }
    } else {
      alert("Username and Password field can not be blank");
    }
  };

  return (
    <form className="col-5 mt-5">
      <h3>Login</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          name="username"
          id="username"
          // value={username}

          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <button
        // to={'/user-welcome'} username={username}
        className="btn btn-primary btn-block"
        onClick={submitForm}
      >
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
