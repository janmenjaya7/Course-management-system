import React from "react";
import "./addsectionCard.css";
import { data } from "../CardSection";
import Chip from "@mui/material/Chip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function AddSecctionCard() {
  return (
    <>
      <div>
        <div className="add-card-sec">
          <div className="card-inner-sec">
            <img src={data[0].image} alt="img" className="img-card" />
            <div className="card-dtl">
              <Chip label={"Draft"} />
              <p className="heding-text">{data[0].heding}</p>
              <div className="stduent-icon">
                <span className="icons-sec">
                  <PermIdentityIcon />
                  24 Students enrolled
                </span>
                <p>{data[0].day} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSecctionCard;
