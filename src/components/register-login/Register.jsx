import React from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import passwordicon from "../../assets/passwordicon/eye.svg";
import Input from "../inpute/Input";
const Register = ({ heding, title }) => {
  return (
    <div>
      <div className="outersection">
        <div className="container container-box">
          <form onSubmit="#">
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <Input type={"name"} label={"Full Name"} />
            <Input type={"email"} label={"Email id"} />
            <div className="password-input">
              <Input type={"password"} label={"Password"} />
              {<img className="img-section" src={passwordicon} alt="icon" />}
            </div>
            <button
              type="submit"
              className="btn custom-button"
              style={{
                backgroundColor: "#1D366F",
                background: "#1D366F 0% 0% no-repeat padding-box",
                color: "#FFFFFF",
              }}
            >
              Register
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and{" "}
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
};

export default Register;
