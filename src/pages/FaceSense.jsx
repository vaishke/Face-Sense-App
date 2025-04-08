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


import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faVideo, faCameraRetro, faBrain, faSyncAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const images = [image1, image2, image3, image4, image5, image7, image8, image9, image10, image11];

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
            <b><u>Key Functionalities of FaceSense </u></b><br /><br />

            <b>Recognizes Faces in Captured Images:</b><br />
            FaceSense accurately detects and identifies human faces from still frames using advanced AI models.<br /><br />

            <b>Displays Bounding Boxes and Names:</b><br />
            Detected faces are highlighted with green bounding boxes, and the recognized names are displayed next to each face.<br /><br />

            <b>Powered by YOLO & FaceNet:</b><br />
            Utilizes YOLO (You Only Look Once) for real-time face detection and FaceNet for facial recognition and embedding-based matching.
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
        {/* <div className="CaptureHomeImg">
    <img className="CaptureHomeGif" src={instructimage} alt="instructimage" />
  </div> */}
        <div className="instruct-text" id="instruct-text">

          <p>
            <b>📖 How to Use FaceSense</b><br /><br />

            Follow the steps below to make the most out of its powerful features:<br /><br />

            <FontAwesomeIcon icon={faHourglassStart} style={{ marginRight: '8px', color: '#4a007e' }} /> <b>Step 1: Getting Started</b><br />
            &#10036; Visit the Home Page of FaceSense.<br />
            &#10036; Explore the about section to learn more about the application’s capabilities.<br /><br />

            <FontAwesomeIcon icon={faVideo} /> <b>Step 2: Launch the Camera</b><br />
            &#10036; Click on the <b>“Click to Capture!”</b> button or use the <b>Camera</b> button from the header or footer.<br />
            &#10036; This will take you to the <b>Camera Page</b>, where your webcam will activate automatically (after asking for permissions).<br />
            &#10036; Make sure to <b>allow camera access</b> when prompted by your browser.<br /><br />

            <FontAwesomeIcon icon={faCameraRetro} /> <b>Step 3: Capture a Frame</b><br />
            &#10036; Once your webcam feed is live, click the <b>“Capture”</b> button.<br />
            &#10036; The current video frame will be captured and displayed on the screen.<br />
            &#10036; This image can be used for <b>analysis</b> and <b>recognition</b>.<br /><br />

            <FontAwesomeIcon icon={faBrain} /> <b>What Happens Behind the Scenes?</b><br />
            &#10036; FaceSense processes the captured image to detect and recognize human faces.<br />
            &#10036; It draws <b>green bounding boxes</b> and <b>identifies the face</b> around detected faces for visual clarity.<br />
            &#10036; Future updates will include features like <b>presence tracking, duration, and report generation</b>.<br /><br />

            <FontAwesomeIcon icon={faSyncAlt} /> <b>Navigation Tips</b><br />
            &#10036; Use the <b>Home, Camera, About,</b> and <b>Instructions</b> buttons from the header or footer to navigate the app.<br />
            &#10036; Smooth scrolling will guide you to the selected sections seamlessly.<br /><br />
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