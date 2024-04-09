import React from "react";
import "./submitassignment.css";
import assingmenticon from "../../assets/Mask Group 29/Mask Group 29.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const SubmitAssignment = () => {
  return (
    <div>
      <div className="submit-outersection">
        <div className="submit-doc-section">
          <h1 className="sumbit-text">Submit Assignment</h1>
          <div className="submit-innersection">
            <Button component="label">
              <img src={assingmenticon} alt="som" className="assingmenticon" />
              <VisuallyHiddenInput type="file" />
            </Button>
            <p>
              Drop your assignment here or <span>Browse</span>
            </p>
            <p>Supported : Doc, Pdf ( 5Mb max)</p>
          </div>
        </div>
        <p className="No-file-uploaded">No file uploaded</p>
        <div className="submit-inner-border"></div>
        <div className="submit-btn">
          <button className="submit-btn1"> cancel</button>
          <button className="submit-btn2">submit</button>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
