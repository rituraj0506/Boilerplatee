import React, { useState, useContext } from "react";
import LoginContext from "../Context/LoginContext";
import './Login.css';

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="container">
      <input
        type="text"
        className="input-field"
        placeholder="Username...."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        className="password-field"
        placeholder="Password...."
      />
      <button onClick={() => setShowProfile(true)}>
        LOGIN
      </button>
    </div>
  );
}

export default Login;
