import React from "react";
import "./grade.css";
import cong from "../../assets/gradeicon/Group 65746.svg";
import star from "../../assets/staricon/Iconstar.jpg";
const Grade = ({ opc, message }) => {
  return (
    <div>
      <div className="grade-outersection">
        <img src={cong} alt="somg" />
        <h3>Congratulations!!! You have secured</h3>
        <button style={{ opacity: opc }}>
          <img src={star} alt="" />
          {message}
        </button>
      </div>
    </div>
  );
};

export default Grade;
