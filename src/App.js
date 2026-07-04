import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import House from "./components/pages/Home";
import Marvel from "./components/pages/Marvel";
import DC from "./components/pages/DC";
import "./components/Navbar.css";
import Navbar from './components/Navbar';
import SignUpPage from './components/pages/SignUp';
import Cyclops from "./components/Heros_of_Marvel/cyclops";
import Captain from "./components/Heros_of_Marvel/captain";
import Hulk from "./components/Heros_of_Marvel/hulk";
import Daredevil from "./components/Heros_of_Marvel/daredevil";
import Hawkeye from "./components/Heros_of_Marvel/hawkeye";
import Iron from "./components/Heros_of_Marvel/iron";
import Silver from "./components/Heros_of_Marvel/silver";
import Spider from "./components/Heros_of_Marvel/spider";
import Thor from "./components/Heros_of_Marvel/thor";
import Wolverine from "./components/Heros_of_Marvel/wolverine";
import Arrow from "./components/Heros_of_DC/arrow";
import Batman from "./components/Heros_of_DC/batman";
import Robin from "./components/Heros_of_DC/robin";
import Martian from "./components/Heros_of_DC/martian";
import Blue from "./components/Heros_of_DC/blue";
import Canary from "./components/Heros_of_DC/canary";
import Linter from "./components/Heros_of_DC/linter";
import Flash from "./components/Heros_of_DC/flash";
import Superman from "./components/Heros_of_DC/superman";
import Wonder from "./components/Heros_of_DC/wonder";
import Footer from "./components/Footer";
import Edit from "./components/pages/Edit";
import UploadHero from "./components/Upload/UploadHero";
import HeroMarvel from "./components/HeroMarvel";
import HeroDC from "./components/HeroDC";

const Home = () => (
  <div>
    <House />
  </div>
);

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

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dc" element={<DC />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/upload" element={<UploadHero />} />
          <Route path="/HeroMarvel:id" element={<HeroMarvel />} />
          <Route path="/HeroDC:id" element={<HeroDC />} />
          <Route path="/cyclops" element={<Cyclops />} />
          <Route path="/captain" element={<Captain />} />
          <Route path="/hulk" element={<Hulk />} />
          <Route path="/daredevil" element={<Daredevil />} />
          <Route path="/hawkeye" element={<Hawkeye />} />
          <Route path="/iron" element={<Iron />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/spider" element={<Spider />} />
          <Route path="/thor" element={<Thor />} />
          <Route path="/wolverine" element={<Wolverine />} />
          <Route path="/arrow" element={<Arrow />} />
          <Route path="/batman" element={<Batman />} />
          <Route path="/canary" element={<Canary />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/flash" element={<Flash />} />
          <Route path="/martian" element={<Martian />} />
          <Route path="/linter" element={<Linter />} />
          <Route path="/robin" element={<Robin />} />
          <Route path="/superman" element={<Superman />} />
          <Route path="/wonder" element={<Wonder />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
