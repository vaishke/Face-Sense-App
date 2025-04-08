// components/Footer.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FaceSense.css";

const Footer = ({ scrollToTop, scrollToCamera, scrollToAbout, scrollToInstruct }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer className={location.pathname === "/camera" ? "foot-cam" : "foot"}>
            <div id="btns-foot">
                <button onClick={() => location.pathname === "/camera" ? navigate("/") : scrollToTop?.()}>
                    Home
                </button>
                <button onClick={scrollToCamera}>Camera</button>  
                <button onClick={() => location.pathname === "/camera"
                    ? navigate("/", { state: { scrollToAbout: true } })
                    : scrollToAbout?.()}>
                    About
                </button>
                <button onClick={() => location.pathname === "/camera"
                    ? navigate("/", { state: { scrollToInstruct: true } })
                    : scrollToInstruct?.()}>
                    Instructions
                </button>
            </div>
            <h4>Copyright &copy; 2025 FaceSense. All rights reserved</h4>
        </footer>
    );
};

export default Footer;
