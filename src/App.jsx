import React from "react";
import { Routes, Route } from "react-router-dom"; 
import FaceSense from "./pages/FaceSense";
import Camera from "./pages/Camera";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FaceSense />} />
      <Route path="/camera" element={<Camera />} />
    </Routes>
  );
}

export default App;