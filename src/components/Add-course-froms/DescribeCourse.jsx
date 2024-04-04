import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function DescribeCourse() {
  return (
    <>
      <div style={{ margin: "0 150px" }}>
        <p>Complete Course Description</p>
        <ReactQuill
          theme="snow"
          placeholder="write your content ...."
          style={{ height: "350px" }}
        ></ReactQuill>
        <div className="about-section">
          <p>About Instructor (yourself)</p>
          <textarea
            placeholder="Enter about instructor"
            className="text-area-about"
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default DescribeCourse;
