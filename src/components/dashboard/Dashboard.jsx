// import React from "react";
// import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
// import image3 from "../../assets/markus-spiske-3/markus-spiske-1LLh8k2_YFk-unsplash.png";

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


// import Card from "../card/card";
// import "../card/card.css"
// import './dashboard.css'
// const Dashboard = () => {

//   return (
//     <>
//        <div>
//        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//   <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//     <Tab label="Item One" {...a11yProps(0)} />
//     <Tab label="Item Two" {...a11yProps(1)} />
//     <Tab label="Item Three" {...a11yProps(2)} />
//   </Tabs>
// </Box>
// <CustomTabPanel value={value} index={0}>
//   Item One
// </CustomTabPanel>
// <CustomTabPanel value={value} index={1}>
//   Item Two
// </CustomTabPanel>
// <CustomTabPanel value={value} index={2}>
//   Item Three
// </CustomTabPanel>

//       <div className="dashboard-Card">
//         {/* <h1>parya</h1>  style={{border:"1px solid red" ,height:"50px"}}*/}
//         <Card
//           heding="Learn java programming : for absolute beginners"
//           image={javaImg}
//           name="by Dev Kanda"
//           day="12"
//           Assignments="12"
//           time=" 12"
//           chip="java"
//           key="2"
//         />
//         <Card
//           heding="Learn DevOps for absolute beginners"
//           image={image3}
//           name="by Misha Randhawa"
//           day="2"
//           Assignments="22"
//           time=" 4"
//           chip="Devops"
//           key="2"
//         />
//       </div>
//        </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from "../card/card";

import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image3 from "../../assets/markus-spiske-3/markus-spiske-1LLh8k2_YFk-unsplash.png";
import './dashboard.css';

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="main-card">
        <div className="nav-sec">

        <Box sx={{ }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
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
            key="2"
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
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

