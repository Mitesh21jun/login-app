import React, { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [newUser, setNewUser] = useState([]);

  const submitSignUp = (e) => {
    e.preventDefault();
    setNewUser({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      admin: admin,
    });

    // if (newUser) {
    //   submitSignUp(e);
    // }

    const json = JSON.stringify(newUser);
    localStorage.setItem(username, json);

    // localStorage.setItem(newUser, 'user');
  };
  return (
    <form onSubmit={submitSignUp} className="col-5 mt-5">
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="first-name"
          id="first-name"
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          name="username"
          id="username"
          value={username}
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

      <div className="form-group">
        <label>Admin</label>
        <input
          type="checkbox"
          className="checkbox"
          name="admin"
          id="admin"
                  onChangeCapture={(e) => setAdmin(e.target.value)}
                checked={admin}  
        //   value={admin}
          onChange={(e) => setAdmin(e.target.checked)}
        />
      </div>
      <br />

      <button onClick={submitSignUp} className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};
export default SignupForm;
