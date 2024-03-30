import './App.css'
import LandingPages from './components/LandingPage/LandingPages'
import Navbar from './components/Navbar/Navbar'
import CardSection from './components/card/CardSection'
import Login from './components/register-login/Login '
import Register from './components/register-login/Register'
import Routing from './Router/Router.jsx'
import Searchnav from './components/searchnvabar/Searchnav'
function App() {
  return (
    <>
      <Routing />
      {/* <Navbar />
      <CardSection />
      <LandingPages /> */}
      <LandingPages />
      <Register heading="Start learning" title="Register Now" />
      <Login heading="Welcome back" title="Login" />
      <Searchnav />
    </>
  )
}
export default App
