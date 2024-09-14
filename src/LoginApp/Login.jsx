import React, { useState } from "react";
import "./login.css";
import { login } from "./utils";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = async () => {
    setError(null);
    setLoading(true);
    try {
      await login({ username, password });
      alert("Login successful !");
    } catch (error) {
      setLoading(false);
    }
  };
  const disableButton = !username || password.length < 6 || loading;
  return (
    <>
      <div className="container">
        <SectionHeader data={"Login Page"} />
        <div style={{ width: 300 }}>
          <div className="login-element-section">
            <div>User Name</div>
            <div>
              <input type="text" value={username} onInput={handleUsername} />
            </div>
          </div>
          <div className="login-element-section">
            <div>Password</div>
            <input type="text" value={password} onInput={handlePassword} />
          </div>
          <div>
            <button
              disabled={disableButton}
              className="button-section"
              onClick={() => handleClick()}
            >
              Login
            </button>
            <div className="errorMessage">{error}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
