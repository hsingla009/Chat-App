import React, { useState } from "react";
import registerImage from "./../../assets/images/register.svg";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/action/auth";
const Register = ({history}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
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
                  type="text"
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
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                />
              </div>
              <button>LOGIN</button>
            </form>
            <p>
              Already have account <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
