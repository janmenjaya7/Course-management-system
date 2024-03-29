import "./App.css";
import LandingPages from "./components/LandingPage/LandingPages";
import Navbar from "./components/Navbar/Navbar";
import CardSection from "./components/card/CardSection";
function App() {
  return (
    <>
      <Navbar />
      <CardSection />
      <LandingPages />
    </>
  );
}
export default App;
