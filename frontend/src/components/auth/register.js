import React, { useState } from "react";
import registerImage from "./../../assets/images/register.svg";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/action/auth";
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.authReducer.errorMessage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const isPassValid = password.length < 5;
  const [showErr, setErr] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, gender, password }, history));
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={registerImage} alt="login image" />
          </div>
          <div id="form-section">
            <h2>Create an account</h2>
            {errorMsg.length > 0 ? (
              <span
                style={{
                  padding: "7px 40px 7px 40px",
                  color: "red",
                  marginTop: "-10px",
                  marginBottom: "-10px",
                  border: "1px solid red",
                  backgroundColor: "#F4A7A7",
                }}
              >
                {errorMsg}
              </span>
            ) : (
              ""
            )}
            <form onSubmit={submitForm}>
              <div className="input-field">
                <input
                  onChange={(ev) => setName(ev.target.value)}
                  type="text"
                  value={name}
                  required
                  placeholder="Name"
                />
              </div>

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
                <select
                  onChange={(ev) => setGender(ev.target.value)}
                  value={gender}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="input-field">
                <input
                  onChange={(ev) => setPassword(ev.target.value)}
                  onClick={() => setErr(true)}
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                />
                <p style={{ marginTop: "-15px", color: "red" }}>
                  {showErr && isPassValid ? "Your password is too short" : ""}
                </p>
              </div>

              <button>SIGN UP</button>
            </form>
            <p>
              Already have accout <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
