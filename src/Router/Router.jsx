import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "../components/LandingPage/LandingPages";
import CardSection from "../components/card/CardSection";
import Error from "./Error";
import Register from "../components/register-login/Register";
import Login from "../components/register-login/Login ";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
function Routing() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/card" element={<CardSection />} />
        <Route
          path="/Register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route
          path="/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/card/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/card/register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Routing;
