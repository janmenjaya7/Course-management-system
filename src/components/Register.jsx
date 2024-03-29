
import React from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import passwordicon from "../assets/eye.svg";

const Register = () => {
const handleSubmit=()=>{

}

  return (
    <div>
      <div className="outersection">
        <div className="container container-box">
          <form  onSubmit={handleSubmit}>
            <h1 className="heading">Start learning</h1>
            <h4 className="Register-Now">Register Now</h4>
            <div className="mb-3 input-container">
              <label htmlFor="exampleInputEmail1" className="form-label shadow-none">
                Full Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 input-container">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 input-container password-section">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="password-input">
                <input
                  type="password"
                  className="form-control shadow-none"
                  id="exampleInputPassword1"
                />
                <img className="img-section" src={passwordicon} alt="icon" />
              </div>
            </div>

            <button
              type="submit"
              className="btn custom-button"
              style={{
                backgroundColor: "#1D366F",
                background: "#1D366F 0% 0% no-repeat padding-box",
                color: "#FFFFFF", // You might want to specify text color too for better visibility
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
      <h5 className="login-link">Already have an account? <span>Login</span></h5>
    </div>
  );
};

export default Register;

