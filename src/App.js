import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/offers" element={<Offers />} />
          <Route path="/Sign-In" element={<SignIn />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
