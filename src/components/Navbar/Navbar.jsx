import React, { useState } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import instractor from "../../assets/logo/iNSTRUCTOR.svg";
// import CardSection from "../card/CardSection";
// import Faq from "../courses/Faq";

function Navbar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue ? "/faq" : "/courses");
  };
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <>
      <div className="navbar-sections">
        <Link to="/">
          <img src={logo} alt="somlog" />
          {pathname.startsWith("/instructor") ? (
            <img src={instractor} alt="instractor" />
          ) : null}
        </Link>
        {pathname === "/courses" ||
        pathname === "/faq" ||
        pathname.startsWith("/courses") ? (
          <>
            <div className="liest-section">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Courses" className="tab-liest" />
                {/* <Tab label="Dashboard" className="tab-liest" />
                <Tab label="Form" className="tab-liest" /> */}
                <Tab label="FAQs" className="tab-liest" />
              </Tabs>
              <li value={value} index={0}></li>
              <li value={value} index={1}></li>
            </div>
            <div className="btn-section">
              <Link to="/instructor" className="trach-text">
                Teach on e2eHiring
              </Link>
              <Button
                variant="outlined"
                className="tab-liest"
                onClick={() => navigate("./login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("./register")}
                className="tab-liest"
              >
                Register now
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
