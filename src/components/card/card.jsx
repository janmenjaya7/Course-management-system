import React from "react";
import "../card/card.css";
import logo from "../../assets/Group-icon/Group 63691.png";
import clock from "../../assets/logo/clock.svg";
import Chip from "@mui/material/Chip";
import Navbar from "../Navbar/Navbar";
function card({ name, day, Assignments, time, image, chip, heding }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="card">
        <div className="img-sec">
          <img src={image} alt="imgSpaiske" />
          <div className="chip-text">
            <Chip label={chip} color="primary" />
          </div>
        </div>
        <div className="java-programming-text">
          <h3 className="java-programming">{heding}</h3>
          <div className="name-sec">
            <p>by {name}</p>
            <div className="Assignments-sec">
              <div>
                <span className="logo-section">
                  <img src={logo} alt="log" />
                  {Assignments} Assignments
                </span>
              </div>
              <div>
                <span className="logo-section" id="logo">
                  <img src={clock} alt="clock" />
                  {time} days
                </span>
              </div>
            </div>
            <div className="submit-due">
              <p>{day} days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
