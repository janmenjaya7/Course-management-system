import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "../card/card";
import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image3 from "../../assets/markus-spiske-3/markus-spiske-1LLh8k2_YFk-unsplash.png";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ id }) => {
  const navigat = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    console.log("working");
    navigat(`/dashboard-card-details`);
  };

  return (
    <>
      <div className="main-card">
        <div className="nav-sec">
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </div>

        <div className="dashboard-Card">
          <Card
            heading="Learn java programming : for absolute beginners"
            image={javaImg}
            name="by Dev Kanda"
            day="12"
            Assignments="12"
            time=" 12"
            chip="java"
            key="1"
            onClick={handleClick}
          />
          <Card
            heading="Learn DevOps for absolute beginners"
            image={image3}
            name="by Misha Randhawa"
            day="2"
            Assignments="22"
            time=" 4"
            chip="Devops"
            key="2"
            onClick={() => navigat(`/dashboard/dashboard-card-details`)}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
