import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  

  return (
    <Routes> 
      <Route path="/" element={ <LandingPage/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/forgotpassword" element={ <ForgotPassword/> } />
    </Routes>
  )
}

export default App
