import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Slider from "./pages/Slider";  // ✅ Ensure correct relative import
import About from "./pages/About";
import Camera from "./pages/Camera";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/Header" element={<Header />} />  
        <Route path="/About" element={<About />} />   
        <Route path="/Camera" element={<Camera />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
