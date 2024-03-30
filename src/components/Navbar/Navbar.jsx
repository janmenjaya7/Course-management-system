<<<<<<< HEAD
import React from 'react'
import logo from '../../assets/logo/Group.svg'
import './navbar.css'
import Button from '@mui/material/Button'

// import ButtonSection from "../buttons/ButtonSection";
=======
import React from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> b305912146187f91561a116e53b8387a9034cf73

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
<<<<<<< HEAD
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

=======
    <>
      <div className="navbar-sec">
        <div className="nav-content">
          <img src={logo} alt="somlog" />
          {location.pathname === "/card" ? (
            <>
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
                <Button
                  variant="contained"
                  onClick={() => navigate("./register")}
                >
                  Register Now
                </Button>
              </div>
            </>
          ) : null}
>>>>>>> b305912146187f91561a116e53b8387a9034cf73
        </div>
       
      </div>
<<<<<<< HEAD
    
    </div>
  )
=======
    </>
  );
>>>>>>> b305912146187f91561a116e53b8387a9034cf73
}

export default Navbar;
