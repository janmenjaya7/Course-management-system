import React from "react";
import "./card.css";
import logo from "../../assets/Group-icon/Group 63691.png";
import clock from "../../assets/logo/clock.svg";
import Chip from "@mui/material/Chip";

function Card({ name, day, Assignments, time, image, chip, heding }) {
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
          <span style={{ color: "#999999" }}>By {name}</span>
          <div className="name-sec">
            <div className="Assignments-sec">
              <span className="logo-sections">
                <img src={logo} alt="log" />
                {Assignments} Assignments
              </span>
            </div>
            <div>
              <span className="logo-sections" id="logo">
                <img src={clock} alt="clock" />
                {time} days
              </span>
            </div>
          </div>
          <div className="submit-due">
            <span>{day} days ago</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
