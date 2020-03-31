import React, { useState } from "react";
import axios from "axios";

const LoginPage = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/protected");
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={handleChanges}
            name="username"
            type="text"
            value={user.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChanges}
            name="password"
            type="password"
            value={user.password}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
