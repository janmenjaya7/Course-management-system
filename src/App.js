import "./App.css";
import Routing from "./Router/Router";
import Assignment2Grade from "./components/Assignment2Grade/Assignment2Grade";
import Navbar from "./components/Navbar/Navbar";
import Ask from "./components/ask/Ask";
import Assement from "./components/assesment/Assement";
import AssignmentGrade from "./components/assignmentgrade/AssignmentGrade";
import ContinueLearning from "./components/continuelearning/ContinueLearning";

import Dashboard from "./components/dashboard/Dashboard";
import Grade from "./components/grade/Grade";

import Searchnav from "./components/searchnvabar/Searchnav";
import SubmitAssignment from "./components/submitAssignment/SubmitAssignment";
import ViewQuestion from "./components/viewQustion/ViewQuestion";
import ViewSection from "./components/viewsection/ViewSection";
const style={opacity:"0.2"}
function App() {
  return (
    <>
    <Navbar/>

      {/* <Routing /> */}
      {/* <Dashboard/>




 
    {/* <AssignmentGrade message={" A+ Grade"} completed={"completed"} bcg={"#D7ECEC"} iconcolor={"#3AA2A0"}  /> */}
  
   
     {/* <Assignment2Grade/> */}
    {/* <Grade/> */}
    {/* <Searchnav/> */}
    {/* <ViewQuestion/> */}
    <Ask/>
 
    </>
  );
}
export default App;
