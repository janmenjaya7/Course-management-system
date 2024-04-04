import React from "react";
import "./Add-basic-detais.css";
import imgss from "../../assets/file-uplode/file-icon.svg";
import { Link } from "react-router-dom";
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
function AddBasicDetails() {
  //   console.log(add);
  return (
    <>
      {/* <TopNavbar /> */}
      <div className="add-corses-section">
        <div id="basic-details">
          <div className="input-sec">
            <label for="Course Title">Course Title</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input-title"
            />
            <div className="input-inlin">
              <div className="course-category">
                <label for="Course Category">Course Category</label>
                <input
                  type="text"
                  placeholder="Select course category"
                  className="input-category"
                />
              </div>
              <div className="course-category">
                <label for="Course skill">Skill</label>
                <input
                  type="text"
                  placeholder="Select skill"
                  className="input-category"
                />
              </div>
            </div>
            <div>
              <p>Course thumbnail ( Short summary of this course )</p>
              <div className="img-inside">
                <Button
                  component="label"
                  role={undefined}
                  variant="text"
                  tabIndex={-1}
                  startIcon={<img src={imgss} alt="uplode" />}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
                <div>
                  <span>Drag files here or</span>
                  <Link to={"#"}>Browse</Link>
                </div>
              </div>
              <p>Supported format : PNG, JPEG</p>
            </div>
            <div>
              <p>About Course ( Short summary of this course )</p>
              <textarea
                type="text"
                placeholder="Enter about course"
                className="text-areas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBasicDetails;
