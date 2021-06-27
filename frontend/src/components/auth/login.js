import React, { useState } from "react";
import loginImage from "./../../assets/images/login.svg";
import "./Auth.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import AuthService from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/auth";

const Login = ({ history }) => {
  const errorMsg = useSelector((state) => state.authReducer.errorMessage);
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
            {errorMsg.length > 0 ?<span
              style={{
                padding: '7px 40px 7px 40px',
                color: "red",
                marginTop: "-10px",
                marginBottom: "-10px",
                border: "1px solid red",
                backgroundColor: "#F4A7A7",
              }}
            >
              {errorMsg}
            </span>:''}
            <form onSubmit={submitForm}>
              <div className="input-field">
                <input
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="email"
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
            <p >
              Don't have account <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
