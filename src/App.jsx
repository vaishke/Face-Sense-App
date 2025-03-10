import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaceSense from "./pages/FaceSense";
import Camera from "./pages/Camera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FaceSense />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
