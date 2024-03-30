import React from "react";
// import { Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "../components/LandingPage/LandingPages";
import CardSection from "../components/card/CardSection";
import Error from "./Error";

function Routing() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/card" element={<CardSection />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Routing;
