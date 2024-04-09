import React from "react";
import "./card.css";
import logo from "../../assets/Group-icon/Group 63691.png";
import clock from "../../assets/logo/clock.svg";

function Card({ name, day, Assignments, time, image, chip, heding, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="img-sec">
          <img src={image} alt="imgSpaiske" />
          <div className="chip-text">
            <div className="chip-content">{chip}</div>
          </div>
        </div>
        <div className="java-programming-text">
          <h3 className="java-programming">{heding}</h3>
          <div style={{ color: "#999999" }}>By {name}</div>
          <div className="name-sec">
            <div className="Assignments-sec">
              <div className="logo-sections">
                <img src={logo} alt="log" />
                {Assignments} Assignments
              </div>
            </div>
            <div>
              <div className="logo-sections" id="logo">
                <img src={clock} alt="clock" />
                {time} days
              </div>
            </div>
          </div>
          <div className="submit-due">
            <div>{day} days ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
