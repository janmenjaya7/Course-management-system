
import React, { useState } from "react";
import "./viewquestion.css";
import clock from "../../assets/logo/clock.svg";

const ViewQuestion = ({handleClose}) => {


const handleClick=()=>{
   
    handleClose()
}
  return (
    <div className="view-section">
       
      <div className="view-aquestion-icon">
        <div>Ask a question</div>
        <i className="fa-solid fa-x" onClick={handleClick}></i>
      </div>
      <div className="section-border"></div>

      <div className="asked-by-rahul">
        <p>Asked by Rahul</p>
        <img src={clock} alt="" />
        <p>8 days</p>
      </div>
      <div className="view-text">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren
        </p>
        <div className="View-topic">
          <p>Topic: Topic1</p>
        </div>
      </div>

      <div className="para-section">
        <p>To be answered</p>
      </div>
      <div className="btn-cont">
        <button className="view-btn">Don</button>
      </div>
    </div>
  );
};

export default ViewQuestion;
