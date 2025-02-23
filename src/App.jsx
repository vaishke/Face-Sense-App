import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detect from './pages/Detect.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="Header">
        <h1 className="logo">FaceSense</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/detect">Detect</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detect" element={<Detect />} />
      </Routes>
    </>
  );
}

export default App;