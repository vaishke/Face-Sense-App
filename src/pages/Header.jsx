// components/Header.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./FaceSense.css"; // You can move shared styles here

const Header = ({ scrollToTop, scrollToCamera, scrollToAbout, scrollToInstruct }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={location.pathname === "/camera" ? "heading-cam" : "heading"}>
      <img src={logo} alt="Logo" id={location.pathname === "/camera" ? "logo-cam" : "logo"} />
      <div id={location.pathname === "/camera" ? "title-cam" : "title"}>FaceSense</div>
      <div id={location.pathname === "/camera" ? "btns-cam" : "btns"}>
      <button onClick={() => location.pathname === "/camera" ? navigate("/") : scrollToTop?.()}>Home</button>
<button onClick={scrollToCamera}>Camera</button>  
<button onClick={() => location.pathname === "/camera" ? navigate("/", { state: { scrollToAbout: true } }) : scrollToAbout?.()}>
  About
</button>
<button onClick={() => location.pathname === "/camera" ? navigate("/", { state: { scrollToInstruct: true } }) : scrollToInstruct?.()}>
  Instructions
</button>


      </div>
    </header>
  );
};

export default Header;
