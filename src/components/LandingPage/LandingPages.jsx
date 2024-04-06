import React from "react";
import "../LandingPage/landingPages.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/logo/Group.svg";
import { useNavigate } from "react-router-dom";

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
              <h3>For bootcamp usecase</h3>
              <div className="heding-landing">Wireframes on Course web app</div>
            </div>
          </div>
          <div className="btn-landing ">
            <button className="btn-guest" onClick={() => navigate("/courses")}>
              Guest/ not registered user
            </button>
            <button
              className="btn-student"
              onClick={() => navigate("/student/register")}
            >
              Student module
            </button>
            <button
              className="btn-instructor"
              onClick={() => navigate("/instructor")}
            >
              Instructor Module
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
