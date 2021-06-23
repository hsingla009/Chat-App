import React, { useState } from "react";
import loginImage from "./../../assets/images/login.svg";
import "./Auth.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import AuthService from "../../services/authService";
import { useDispatch } from "react-redux";
import { login } from "../../store/action/auth";

const Login = ({history}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={loginImage} alt="login image" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field">
                <input
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="text"
                  value={email}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="input-field">
                <input
                  onChange={(ev) => setPassword(ev.target.value)}
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                />
              </div>
              <button>LOGIN</button>
            </form>
            <p>
              Don't have account <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
