import React from "react";
import "../LandingPage/landingPages.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/logo/Group.svg";
import { Link, useNavigate } from "react-router-dom";

function LandingPages() {
  const navigate = useNavigate();

  return (
    <>
      <div id="main-section">
        <div className="cards">
          <div className="logos">
            <img src={image} alt="logo" height={"71px"} width={"209px"} />
          </div>
          <div className="text-section">
            <div className=" text-center">
              <h3>for bootcamp usecase</h3>
              <h1>Wireframes on Course web app</h1>
            </div>
          </div>
          <div className="btn-landing ">
            <button className="btn-guest" onClick={() => navigate("/card")}>
              uest/ Not registered User
            </button>
            <button
              className="btn-student"
              onClick={() => navigate("/register")}
            >
              Student module
            </button>
            <button className="btn-instructor">Instructor Module</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
