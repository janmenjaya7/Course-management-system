import "./App.css";
import CertificateModul from "./components/Certificate-modal/CertificateModul";
import Modals from "./components/Certificate-modal/Modal";
import StudentsEnrolled from "./components/Students-enrolled/StudentsEnrolled";
import StudentsEnrolledData from "./components/Students-enrolled/StudentsEnrolledData";
import Routing from "./Router/Router";
function App() {
  return (
    <>
      <Routing />
      {/* <CertificateModul /> */}
      {/* <Modals />
      <StudentsEnrolled />
      <StudentsEnrolledData /> */}
    </>
  );
}
export default App;
