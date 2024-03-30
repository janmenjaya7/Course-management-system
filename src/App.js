import "./App.css";
<<<<<<< HEAD
import Routing from "./Router/Router";
// import LandingPages from "./components/LandingPage/LandingPages";
// import Navbar from "./components/Navbar/Navbar";
// import CardSection from "./components/card/CardSection";

=======
import LandingPages from "./components/LandingPage/LandingPages";
import Navbar from "./components/Navbar/Navbar";
import CardSection from "./components/card/CardSection";
import Login from "./components/register-login/Login ";
import Register from "./components/register-login/Register";
import Searchnav from "./components/searchnvabar/Searchnav";
>>>>>>> 2a4f4ac86e046a3606064be7c2315eef3a0fbb5b
function App() {
  return (
    <>
      <Routing />
      {/* <Navbar />
      <CardSection />
<<<<<<< HEAD
      <LandingPages /> */}
=======
      <LandingPages />
      <Register heading="Start learning" title="Register Now"  />
      <Login heading="Welcome back" title="Login" />
      <Searchnav/>
>>>>>>> 2a4f4ac86e046a3606064be7c2315eef3a0fbb5b
    </>
  );
}
export default App;
