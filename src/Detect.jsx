import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  return (
    <>
      <div className="Header">
        <h1 className="logo">Face Sense</h1>
        <nav className="nav-links">
          <a href="App.jsx">Home</a>
          <a href="About.jsx">About</a>
          <a href="Detect.jsx">Detect</a>
        </nav>
      </div>
    </>
  );
}

export default App;