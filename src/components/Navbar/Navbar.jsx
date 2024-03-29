import React from "react";
<<<<<<< HEAD
// import logo from "../../../assets/logo/Group.svg"
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import Button from "@mui/material/Button";
import ButtonSection from "../buttons/ButtonSection";
=======
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import Button from "@mui/material/Button";
// import ButtonSection from "../buttons/ButtonSection";
>>>>>>> 9652158f408d67e2887cdf06e8c033263ac35d42

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
<<<<<<< HEAD
            <p>Teach on e2eHiring</p>
            {/* <Button variant="outlined">Login</Button>
            <Button variant="contained">Register Now</Button> */}
            <ButtonSection variant="outlined"/>
            <ButtonSection variant="contained"/>
            <ButtonSection variant="text"/>
=======
            <div>Teach on e2eHiring</div>
            {/* <ButtonSection>Login</ButtonSection> */}
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Register Now</Button>
>>>>>>> 9652158f408d67e2887cdf06e8c033263ac35d42
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
