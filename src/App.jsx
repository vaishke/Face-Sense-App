import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ani from './pages/Ani.jsx';
import Camera from './pages/Camera.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Ani.jsx" element={<Ani />} />
        <Route path="/Camera.jsx" element={<Camera />} /> {/* Corrected route */}
      </Routes>
    </Router>
  );
}

export default App;