import React from "react";
import Input from "../inpute/Input";
import password from "../../assets/passwordicon/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import "./instructor.css";
const InstructorLogin = ({ heading, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="outersection-inst">
        <div className="container container-box">
          <form>
            <h1 className="heading">{heading}</h1>
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
              onClick={() => navigate("/instructor/myCourse")}
              type="submit"
              className="custom-button"
            >
              Register
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and
              <span>Privacy policies</span>
            </p>
            <div className="already-acc">
              Already have an account?{" "}
              <Link to={"/instructor/login"}>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
