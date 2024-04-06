import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPages from "../components/LandingPage/LandingPages";
import CardSection from "../components/card/CardSection";
import Error from "./Error";
import Register from "../components/register-login/Register";
import Login from "../components/register-login/Login ";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import InstructorRegister from "../components/instructor/InstructorRegister";
import InstructorLogin from "../components/instructor/InstructorLogin";
// import AddCources from "../components/Add-cources/AddCources";
import InstractorMyCourse from "../components/instractor-sections/InstractorMyCourse";
import TopNavbar from "../components/Add-course-froms/TopNavbar";
import Faq from "../components/courses/Faq";
import CoursesCardDetails from "../components/courses/CoursesCardDetails";
import Syllabus from "../components/courses/Syllabus";
import Overview from "../components/courses/Overview";
import CardFroumSec from "../components/card-foum/CardFroumSec";
function Router({ id }) {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/courses" element={<CardSection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Forum" element={<CardFroumSec />} />
        <Route
          path={`/courses/CoursesCardDetails/${id}`}
          element={<CoursesCardDetails />}
        />
        <Route
          path="/Register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route
          path="/login/"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/student/register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route
          path="/student/login"
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
        <Route
          path="/instructor"
          element={
            <InstructorRegister
              heding="Start teaching on e2eHiring"
              title="Register as Instructor"
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <InstructorRegister
              heding="Start teaching on e2eHiring"
              title="Register as Instructor"
            />
          }
        />
        <Route
          path="/instructor/login"
          element={
            <InstructorLogin heding="Welcome back" title="Instructor Login" />
          }
        />
        <Route path="/instructor/myCourse" element={<InstractorMyCourse />} />
        <Route path="/instructor/myCourse/addCourses" element={<TopNavbar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Router;
