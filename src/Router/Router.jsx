import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "../components/LandingPage/LandingPages";
import CardSection from "../components/card/CardSection";
import Error from "./Error";
import Register from "../components/register-login/Register";
import Login from "../components/register-login/Login ";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/card" element={<CardSection />} />
        <Route
          path="/Register"
          element={<Register heading="Start learning" title="Register Now" />}
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
