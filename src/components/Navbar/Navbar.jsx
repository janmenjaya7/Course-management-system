import React from "react";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import Button from "@mui/material/Button";
import Searchnav from "../searchnvabar/Searchnav";
// import ButtonSection from "../buttons/ButtonSection";

function Navbar() {
  return (
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
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Register Now</Button>
          </div>
        </div>
      </div >
      <div style={{marginTop:"100px"}}>
        <Searchnav />
      </div>
    
    </>
  );
}

export default Navbar;
