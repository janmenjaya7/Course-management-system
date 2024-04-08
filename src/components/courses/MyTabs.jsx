import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./MyTabs.css";
import Syllabus from "../courses/Syllabus";
import Overview from "../courses/Overview";
import CardFroumSec from "../card-foum/CardFroumSec";
import FaqSection from "./FaqSection";
export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <FaqSection />
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
