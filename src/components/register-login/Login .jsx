import React from "react";
import Input from "../inpute/Input";
import password from "../../assets/passwordicon/eye.svg";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login({ heding, title }) {
  const navigate = useNavigate();
  return (
    <div id="login-main-section">
      <div className="outersection">
        <div className="container-login">
          <form>
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <Input type={"email"} label={"Email id"} placeholder={"Email"} />
            <div className="password-input">
              <Input
                type={"password"}
                label={"Password"}
                placeholder={"Password"}
              />
              {<img className="img-section" src={password} alt="icon" />}
            </div>
            <button
              type="submit"
              onClick={() => navigate("/courses")}
              className="custom-button"
            >
              Login
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and
              <span>Privacy policies</span>
            </p>
          </form>
        </div>
      </div>
      <div className="login-link">
        Already have an account? <span>Login</span>
      </div>
    </div>
  );
}

export default Login;
