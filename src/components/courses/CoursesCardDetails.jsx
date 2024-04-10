import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import MyTabs from "./MyTabs";
import "./CoursesCardDetails.css";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import SizesChips from "./SizesChips";
import Modals from "../Certificate-modal/Modal";
import { useState } from "react";
import Register from "../register-login/Register";

function CoursesCardDetails({ buttonText }) {
  const [open, setOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleOpenEnroll = () => {
    setOpen(true);
    setIsEnrolled(true);
  };

  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<Register setOpen={setOpen} title="Register Now" />}
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "40px",
                marginTop: "60px",
              }}
            >
              <button
                className="btn-enroll"
                onClick={handleOpenEnroll}
                style={{ margin: "0 20px" }}
              >
                {isEnrolled ? "Start Learning Now" : "Enroll Now"}
              </button>

              {isEnrolled ? (
                <div
                  style={{
                    display: "flex",
                    height: "40px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "100%",
                      border: "1px solid #CCCCCC",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#262626",
                        fontSize: "13px",
                        textAlign: "center",
                        padding: " 10px",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          listStylePosition: "inside",
                        }}
                      >
                        <li
                          style={{
                            listStyleTypeColor: " #F89206",
                            padding: "0 20px",
                          }}
                        ></li>
                      </div>
                      In progress
                    </div>
                  </div>
                  <div>
                    <div
                      className="vertical"
                      style={{
                        color: "#999999",
                        width: "1px",
                        border: "1px solid #999999",
                        height: "30px",
                      }}
                    ></div>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "#F89206",
                        fontSize: "15px",
                        paddingRight: "10px",
                        paddingTop: "9px",
                        paddingBottom: "7px",
                        paddingLeft: "20px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "4px",
                      }}
                    >
                      50% completed
                    </span>
                  </div>

                  <div
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      border: "none",
                    }}
                  >
                    <span>last activity on 09/04/24</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="primaryDiv2">
            <img src={javaImg} alt="img" />
          </div>
        </div>
        <div className="tabNav">
          <MyTabs isEnrolled={isEnrolled} />
        </div>
      </div>
    </>
  );
}

export default CoursesCardDetails;
