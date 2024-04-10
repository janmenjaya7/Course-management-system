import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./searchnav.css";
import searchicon from "../../assets/logo/search-24px.svg";

const Searchnav = () => {
  return (
    <div style={{ marginTop: "80px", marginBottom: "10px" }}>
      <div
        className="container container-search"
        style={{ marginBottom: "0px" }}
      >
        <div className="dropdown">
          <button
            style={{
              borderRadius: "10px 0px 0px 10px",
              paddingLeft: "25px",
              paddingBottom: "13px",
              paddingTop: "12px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #C9C9C9 ",
              color: "#262626",
            }}
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Courses
          </button>
          <ul
            className="dropdown-menu  dropdownMenuStyle"
            aria-labelledby="dropdown"
          >
            <li>
              <span
                className="dropdown-item"
                style={{
                  color: " #999999",
                  fontSize: "14px",
                  fontFamily: "Open Sans",
                }}
              >
                Catagories
              </span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Data Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Business
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Computer Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Information Technology
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Health
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Personal Development
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Social Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Arts
              </a>
            </li>
          </ul>
        </div>

        <div className="search-box  searchBoxMainStyle">
          <input
            type="text"
            className="form-control shadow-none  searchBoxStyle"
            aria-label="Text input with dropdown button"
            placeholder="Search our Courses"
            style={{
              height: "51px",
              borderLeftStyle: "none",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          />
          <span>
            <img className=" logoSearchStyle" src={searchicon} alt="icon" />
          </span>
        </div>

        <div className="dropdown">
          <button
            style={{
              borderRadius: "10px 10px",
              paddingLeft: "25px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #C9C9C9 ",
              fontFamily: "Open Sans",
              marginLeft: "16px",
              color: "#262626",
              lineHeight: "18px",
            }}
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              style={{
                fontFamily: "Opens Sans",
                fontSize: "10px",
                color: "#262626",
                textAlign: "start",
                opacity: "0.5",
              }}
            >
              Sort By
            </div>
            Most Recent
          </button>
          <ul
            className="dropdown-menu  dropdownMenuStyle2"
            aria-labelledby="dropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                Most Recent
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Most Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Searchnav;
