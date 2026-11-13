import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import House from "./Screens/Home/Home";
import Marvel from "./Screens/Marvel/Marvel";
import DC from "./Screens/DC/DC";
import "./components/Navbar.css";
import "./styles/motion.css";
import Navbar from "./components/Navbar";
import SignUpPage from "./Screens/Register/SignUp";
import Footer from "./components/Footer";
import Edit from "./components/pages/Edit";
import UploadHero from "./Screens/Upload/UploadHero";
import HeroMarvel from "./components/HeroMarvel";
import HeroDC from "./components/HeroDC";

const Home = () => (
  <div>
    <House />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="route-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" exact element={<Home />} />
        <Route path="/dc" element={<DC />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/upload" element={<UploadHero />} />
        <Route path="/marvel/:hero" element={<HeroMarvel />} />
        <Route path="/dc/:hero" element={<HeroDC />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Router>
        <Navbar />

        <AnimatedRoutes />

        <Footer />
      </Router>
    </>
  );
};

export default App;
