import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./MyTabs.css";
import Faq from "../courses/Faq";
import Syllabus from "../courses/Syllabus";
import Overview from "../courses/Overview";
import CardFroumSec from "../card-foum/CardFroumSec";
export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
    // navigate(newValue);
  };

  return (
    <>
      <div className="tabInside">
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="Syllabus" />
          <Tab value={1} label="Overview" />
          <Tab value={2} label="Forum" />
          <Tab value={3} label="FAQs" />
        </Tabs>
      </div>
      {value === 3 ? (
        <Faq />
      ) : value === 2 ? (
        <CardFroumSec />
      ) : value === 1 ? (
        <Overview />
      ) : (
        <Syllabus />
      )}
    </>
  );
}
