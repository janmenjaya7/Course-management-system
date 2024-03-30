<<<<<<< HEAD
import React from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
=======
import React from 'react'
import logo from '../../assets/logo/Group.svg'
import './navbar.css'
import Button from '@mui/material/Button'
// import ButtonSection from "../buttons/ButtonSection";
>>>>>>> ca73e85a2dd51340ec79f97d30e1e3818d389d12

function Navbar() {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <>
      <div className="navbar-sec">
        <div className="nav-content">
          <img src={logo} alt="somlog" />
          <div className="liest-section">
            <li>Courses</li>
            <li>FAQs</li>
          </div>
          <div className="btn-section">
            <div>Teach on e2eHiring</div>
            {/* <ButtonSection>Login</ButtonSection> */}
            <Button variant="outlined" onClick={() => navigate("./login")}>
              Login
            </Button>
            <Button variant="contained" onClick={() => navigate("./register")}>
              Register Now
            </Button>
          </div>
=======
    <div className="navbar-sec">
      <div className="nav-content">
        <img src={logo} alt="somlog" />
        <div className="liest-section">
          <li>Courses</li>
          <li>FAQs</li>
        </div>
        <div className="btn-section">
          <div>Teach on e2eHiring</div>
          {/* <ButtonSection>Login</ButtonSection> */}
          <Button variant="outlined">Login</Button>
          <Button variant="contained">Register Now</Button>
>>>>>>> ca73e85a2dd51340ec79f97d30e1e3818d389d12
        </div>
      </div>
    </div>
  )
}

export default Navbar
