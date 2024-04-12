import React from "react";
import "./grade.css";
import cong from "../../assets/gradeicon/Group 65746.svg";
import star from "../../assets/staricon/Iconstar.jpg";
const Grade = ({ opc, message, heding }) => {
  return (
    <div>
      <div className="grade-outersection">
        <img src={cong} alt="somg" style={{ opacity: opc }} />
        <h3 style={{ color: "#999" }}>{heding}</h3>
        <button style={{ opacity: opc }}>
          <img src={star} alt="star" />
          {message}
        </button>
      </div>
    </div>
  );
};

export default Grade;
