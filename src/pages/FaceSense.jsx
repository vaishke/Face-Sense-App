import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FaceSense.css"; // Import styles
import logo from "../assets/logo.jpg"; // Import images properly
import bgVideo from "../assets/bgvideo.mp4";
import aboutImage from "../assets/aboutimage1.jpg";

// Import all images for the banner slider
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/mainpopup.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image6.webp";
import image10 from "../assets/image9.jpg";
import image11 from "../assets/image10.avif";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

function FaceSense() {
  const navigate = useNavigate();
  const videoRef = useRef(null);  // Ref for video background
  const sliderRef = useRef(null); // Ref for image slider

  // Effect to ensure video plays automatically
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video play failed:", err));
    }
  }, []);

  // Automatic image slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 300; // Move slider every 3 seconds
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0; // Reset when reaching end
        }
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll functions
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToAbout = () => document.getElementById("about-container").scrollIntoView({ behavior: "smooth" });
  const goToCamera = () => navigate("/camera");

  return (
    <div>
      {/* Header Section */}
      <header className="heading">
        <img src={logo} alt="Logo" id="logo" />
        <div id="title">FaceSense</div>
        <div id="btns">
          <button onClick={scrollToTop}>Home</button>
          <button onClick={goToCamera}>Camera</button>
          <button onClick={scrollToAbout}>About</button>
        </div>
      </header>

      {/* Background Video */}
      <video ref={videoRef} autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Banner Section */}
      <div className="banner">
        <div className="slider" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">
          <div className="model">FaceSense</div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-container" id="about-container">
        <img src={aboutImage} id="about-image" className="aboutimage" alt="About FaceSense" />
        <div className="about-text" id="about-text">
          <p>
            <mark>FaceSense</mark> is an AI-powered facial recognition application that captures video footage and detects human faces in real-time...
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="foot">
        <div id="btns-foot">
          <button onClick={scrollToTop}>Home</button>
          <button onClick={goToCamera}>Camera</button>
          <button onClick={scrollToAbout}>About</button>
        </div>
        <h4>Copyright &copy; 2025 FaceSense. All rights reserved</h4>
      </footer>
    </div>
  );
}

export default FaceSense;
