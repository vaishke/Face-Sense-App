import React from "react";
import { useNavigate } from "react-router-dom";
import "./FaceSense.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import logo from "../assets/logo.jpg";
import bgVideo from "../assets/bgvideo1.mp4";
import Captureani from "../assets/Captureani1.gif";
import instructimage from "../assets/aboutimage1.jpg"
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about-container").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToInstruct = () => {
    document.getElementById("instruct-container").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCamera = () => {
    document.getElementById("CaptureHome").scrollIntoView({ behavior: "smooth" });
  };
  const goToCamera = () => {
    navigate("/camera");
  };

  return (
    <div>
      {/* Header Section */}
      <Header
  scrollToTop={scrollToTop}
  scrollToCamera={scrollToCamera}
  scrollToAbout={scrollToAbout}
  scrollToInstruct={scrollToInstruct}
/>

      {/* Background Video */}
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src={bgimage} alt="Logo" id="bg-video" /> */}

      {/* Animated Banner Section */}
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((img, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 }}>
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* About Section */}
      <div className="about-container" id="about-container">
        {/* <img src={aboutImage} id="about-image" className="aboutimage" alt="About FaceSense" /> */}
        <div className="about-text" id="about-text">
          <p>
            <b>FaceSense is an AI-powered facial recognition application that captures video footage and detects human faces in real time. Using advanced image processing techniques, it identifies individuals, tracks their movements, and analyzes their presence within a designated area. Once a face is detected, the application highlights it with a green bounding box for clear visibility, ensuring accurate and efficient recognition. This web-based application seamlessly integrates with live video streams from sources such as IP cameras and local video files. It offers key functionalities like facial recognition, object tracking, and real-time monitoring, allowing users to track entry and exit events and generate reports on individual presence and duration. Designed for security monitoring and accessibility solutions, FaceSense features an intuitive user interface with real-time annotations and ensures data privacy by complying with relevant regulations. Its fast and precise detection capabilities enhance security, automation, and surveillance across various environments.</b>
          </p>
        </div>
        <div className="CaptureHome" id="CaptureHome">
  <div className="CaptureHomeImg">
    <img className="CaptureHomeGif" src={Captureani} alt="Capture Animation" />
    <button className="CaptureHomeButton" onClick={goToCamera}>
    Click to Capture!
    </button>
  </div>
</div>
        
      </div>
      {/* Instruction Section */}
      <div className="instruct-container" id="instruct-container">
        <div className="CaptureHomeImg">
    <img className="CaptureHomeGif" src={instructimage} alt="instructimage" />
  </div>
        <div className="about-text" id="about-text">
          <p>
            <b>FaceSense is an AI-powered facial recognition application that captures video footage and detects human faces in real time. Using advanced image processing techniques, it identifies individuals, tracks their movements, and analyzes their presence within a designated area. Once a face is detected, the application highlights it with a green bounding box for clear visibility, ensuring accurate and efficient recognition. This web-based application seamlessly integrates with live video streams from sources such as IP cameras and local video files. It offers key functionalities like facial recognition, object tracking, and real-time monitoring, allowing users to track entry and exit events and generate reports on individual presence and duration. Designed for security monitoring and accessibility solutions, FaceSense features an intuitive user interface with real-time annotations and ensures data privacy by complying with relevant regulations. Its fast and precise detection capabilities enhance security, automation, and surveillance across various environments.</b>
          </p>
        </div>
        <div className="CaptureHome" id="CaptureHome">
  
</div>
        
      </div>

      {/* Footer Section */}
      <Footer
  scrollToTop={scrollToTop}
  scrollToCamera={scrollToCamera}
  scrollToAbout={scrollToAbout}
  scrollToInstruct={scrollToInstruct}
/>
    </div>
  );
}

export default FaceSense;