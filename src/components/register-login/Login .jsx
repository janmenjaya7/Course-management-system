import React from "react";
import Input from "../inpute/Input";
import password from "../../assets/passwordicon/eye.svg";

function Login({ heding, title }) {
  return (
    <div>
      <div className="outersection">
        <div className="container container-box">
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
              className="btn custom-button"
              style={{
                background: "#1D366F",
                color: "#FFFFFF",
              }}
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
      <h5 className="login-link">
        Already have an account? <span>Login</span>
      </h5>
    </div>
  );
}

export default Login;