import React, { useState } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="navbar-sec">
        <Link to="/">
          <img src={logo} alt="somlog" />
        </Link>
        {location.pathname === "/card" ? (
          <>
            <div className="liest-section">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Courses" className="tab-mui" />
                <Tab label="FAQs" />
              </Tabs>
              <li value={value} index={0}></li>
              <li value={value} index={1}></li>
            </div>
            <div className="btn-section">
              <div>Teach on e2eHiring</div>
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
            {/* </div> */}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
