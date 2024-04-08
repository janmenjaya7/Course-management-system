import React, { useState } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import passwordicon from "../../assets/passwordicon/eye.svg";
import Input from "../inpute/Input";
import { useNavigate } from "react-router-dom";
const Register = ({ heding, title }) => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[nameEroor,setNameError]=useState("");
const[emailError,setEmailError]=useState("");
const[passwordError,setPasswordError]=useState("")

const[userData,setUserData]=useState([])

  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
   if(!name.trim()){
     
    // alert("name is required")
    setNameError("Name is Required")
    return;
   }
   if(!email.trim()){
   
    // alert("email is required")
    setEmailError("Email is Required")
    return;
   }
   if(!password.trim()){
 
    // alert("password is required")
    setPasswordError("Password is Required")
    return;
   
   }else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)){
   setPasswordError("Password must contain at least one letter and one number")
   return;
   }
   
   navigate("/courses");
  };
  return (
    <div id="register-main-section">
      {userData.map((item)=>{
    return <p>{item}</p>
      })}
      <div className="outersection">

        <div className="container-box">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <Input
              type={"text"}
              label={"Full name"}
              placeholder={"Full name"}
              handleChange={(e)=>setName(e.target.value)}
              value={name}
            />
           <p className="nameEroor">{nameEroor}</p>
            <Input
              type={"email"}
              label={"Email id"}
              placeholder={"Email"}
              handleChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            <p className="emailError">{emailError}</p>
            <div className="password-input">
              <Input
                type={"password"}
                label={"Password"}
                placeholder={"Password"}
                handleChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
              <p className="passwordError">{passwordError}</p>
              {<img className="img-section" src={passwordicon} alt="icon" />}
            </div>
            <button
              // onClick={() => navigate("/courses")}
              type="submit"
              className="btn custom-button"
    
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
      <div className="login-link">
        Already have an account? <span>Login</span>
      </div>
    </div>
  );
};

export default Register;

