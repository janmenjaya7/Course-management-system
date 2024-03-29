import React from 'react'
import '../card/card.css'
import logo from '../../assets/Group-icon/Group 63691.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Chip from '@mui/material/Chip'
function card({ name, day, Assignments, time, image, chip }) {
  return (
    <>
      <div className="card">
        <div className="img-sec">
          <img src={image} alt="imgSpaiske" />
          <div className="chip-text">
            <Chip label={chip} color="primary" />
          </div>
        </div>
        <div className="java-programming-text">
          <h3 className="java-programming">
            Learn java programming : for absolute beginners
          </h3>
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
                  {/* <AccessTimeIcon /> */}
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
  )
}

export default card
