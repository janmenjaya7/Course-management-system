import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function AddSyllabus() {
  return (
    <>
      <div className="syllabus-main">
        <div className="syllabus-heding">
          <div className="text-heding">0 Topics</div>
          <button className="add-Syllabus-btn">Add Topic</button>
        </div>
        <div className="syllabus-input-main">
          <input
            type="text"
            className="syllabus-input"
            placeholder="Topic name"
          />
          <DeleteIcon />
        </div>
        <p className="add-assessment">
          <AddIcon /> Add Assessment
        </p>
      </div>
    </>
  );
}

export default AddSyllabus;
