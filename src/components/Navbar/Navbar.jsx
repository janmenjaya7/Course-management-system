import React from "react";
// import logo from "../../../assets/logo/Group.svg";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import Button from "@mui/material/Button";

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
            <p>Teach on e2eHiring</p>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Register Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
