import React from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import passwordicon from "../../assets/passwordicon/eye.svg";
import Input from "../inpute/Input";
import { useNavigate } from "react-router-dom";
const Register = ({ heding, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="outersection">
        <div className="container container-box">
          <form onSubmit="#">
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <Input
              type={"text"}
              label={"Full name"}
              placeholder={"Full name"}
            />
            <Input type={"email"} label={"Email id"} placeholder={"Email"} />
            <div className="password-input">
              <Input
                type={"password"}
                label={"Password"}
                placeholder={"Password"}
              />
              {<img className="img-section" src={passwordicon} alt="icon" />}
            </div>
            <button
              onClick={() => navigate("/student/login")}
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
        <div className="login-link">
          Already have an account? <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
