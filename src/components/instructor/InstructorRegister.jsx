import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../inpute/Input";
import passwordicon from "../../assets/passwordicon/eye.svg";
import { useNavigate } from "react-router-dom";
const InstructorRegister = ({ heding, title, placeholder }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="instructor-registering-main">
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
              onClick={() => navigate("/instructor/login")}
              type="submit"
              className="custom-button"
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
        Already have an account? <line to={navigate("/login")}>Login</line>
      </h5>
    </div>
  );
};

export default InstructorRegister;
