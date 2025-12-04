import React from "react";
import Stand from "./components/Stand";
import Header from "./components/Header";
import Home from "./components/Home";
import Uitslagen from "./components/Uitslagen";
import Recent from "./components/Recent";
import Footer from "./components/Footer";
import History from "./components/History";
import ClubInfo from "./components/ClubInfo"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uitslagen" element={<Uitslagen />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/stand" element={<Stand />} />
          <Route path="/history" element={<History />} />
          <Route path="/clubinfo" element={<ClubInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
