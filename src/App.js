<<<<<<< HEAD
import "./App.css";
import Routing from "./Router/Router";
=======
import './App.css'
import LandingPages from './components/LandingPage/LandingPages'
import Navbar from './components/Navbar/Navbar'
import CardSection from './components/card/CardSection'
import Login from './components/register-login/Login '
import Register from './components/register-login/Register'
import Routing from './Router/Router.jsx'
import Searchnav from './components/searchnvabar/Searchnav'
>>>>>>> ca73e85a2dd51340ec79f97d30e1e3818d389d12
function App() {
  return (
    <>
      <Routing />
<<<<<<< HEAD
=======
      {/* <Navbar />
      <CardSection />
      <LandingPages /> */}
      <LandingPages />
      <Register heading="Start learning" title="Register Now" />
      <Login heading="Welcome back" title="Login" />
      <Searchnav />
>>>>>>> ca73e85a2dd51340ec79f97d30e1e3818d389d12
    </>
  )
}
export default App
