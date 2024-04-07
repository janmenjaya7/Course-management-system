import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import MyTabs from "./MyTabs";
import "./CoursesCardDetails.css";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import SizesChips from "./SizesChips";
import Modals from "../Certificate-modal/Modal";
import { useState } from "react";
import Register from "../register-login/Register";
import Login from "../register-login/Login ";

function CoursesCardDetails() {
  const [open, setOpen] = useState(false);
  const handleOpenEnroll = () => setOpen(true);
  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<Register setOpen={setOpen} />}
      />
      <div id="course-details">
        <div className="primaryDiv1">
          <div>
            <div className="breadCrumbsClass">
              <BasicBreadcrumbs />
            </div>
            <div>
              <SizesChips />
            </div>
            <div className="headingClassmain">
              <p className="headingClass">
                <b>Learn java programming : for absolute beginners</b>
              </p>
            </div>
            <div className="paraCourse">
              <p className="paraCourse1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
            </div>
            <div className="list-item">
              <li>By Dev Kanda</li>
              <li>12 Assignments</li>
              <li>12 days</li>
              <li>Added 2 days ago</li>
            </div>
            <button className="btn-enroll" onClick={handleOpenEnroll}>
              Enroll Now
            </button>
          </div>

          <div className="primaryDiv2">
            <img src={javaImg} alt="" />
          </div>
        </div>
        <div className="tabNav">
          <MyTabs />
        </div>
      </div>
    </>
  );
}

export default CoursesCardDetails;
