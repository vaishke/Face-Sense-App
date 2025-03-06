import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 
import logo from "../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="heading">
      {/* <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" /> */}
      <img src={logo} alt="Logo" />;
      <div id="title">FaceSense</div>
      <div id="btns">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/Camera")}>Camera</button>
        <button onClick={() => navigate("/About")}>About</button>
      </div>
    </div>
  );
};

export default Header;
