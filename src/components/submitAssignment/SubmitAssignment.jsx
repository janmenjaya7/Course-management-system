import React from "react";
import "./submitassignment.css";
import assingmenticon from "../../assets/Mask Group 29/Mask Group 29.png";
const SubmitAssignment = () => {
  return (
    <div>
      <div className="submit-outersection">
        <div>
          <h1 className="sumbit-text">Submit Assignment</h1>
          <div className="submit-innersection">
            <img src={assingmenticon} alt="som" className="assingmenticon" />

            <p>
              Drop your assignment here or <span>Browse</span>{" "}
            </p>
            <p>Supported : Doc, Pdf ( 5Mb max)</p>
          </div>
        </div>
        <p className="No-file-uploaded">No file uploaded</p>
        <div className="submit-inner-border">

        </div>
        <div className="submit-btn">
            <button className="submit-btn1"> cancel</button>
            <button className="submit-btn2">submit</button>
        </div>
      </div>
      
    </div>
  );
};

export default SubmitAssignment;
