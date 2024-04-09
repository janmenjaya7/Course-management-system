import React from "react";
import "./assesment.css";
import BootstrapDrop from "./BootstrapDrop";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ClearIcon from "@mui/icons-material/Clear";
const Assement = ({ setOpen }) => {
  return (
    <div>
      <div className="assesment-outersection">
        <div className="assentment-icon">
          <p>Assessment 1</p>
          <ClearIcon
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="assesment-innerBorder"></div>
        <div className="assesment-inputBox">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="Enter assessment 1 title" />
        </div>
        <div className="MultipleSelect">
          <p>Time Duration (in days)</p>
          <BootstrapDrop />
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Enter complete course description"
          style={{ height: "250px", borderRadius: "20px" }}
        ></ReactQuill>
      </div>
    </div>
  );
};

export default Assement;
