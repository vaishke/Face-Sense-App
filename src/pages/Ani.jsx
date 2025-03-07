import React, { useRef, useEffect } from 'react';
import './Ani.css';
function Ani() {

  document.getElementById("homeBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.getElementById("cameraBtn").addEventListener("click", function() {
    window.location.href = "camera.html"; // Navigate to camera page
});
document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("about-container").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("cameraBtn-foot").addEventListener("click", function() {
    window.location.href = "camera.html"; // Navigate to camera page
});
document.getElementById("aboutBtn-foot").addEventListener("click", function() {
    document.getElementById("about-container").scrollIntoView({
        behavior: "smooth"
    });
});
  return (
    <div>
      <div className="heading">
        <img src="assets/logo.jpg" alt="Logo" id="logo" />
        <div id="title">FaceSense</div>
        <div id="btns">
          <button id="homeBtn" onClick={handleHomeClick}>Home</button>
          <button id="cameraBtn" onClick={handleCameraClick}>Camera</button>
          <button id="aboutBtn" onClick={handleAboutClick}>About</button>
        </div>
      </div>
      <video autoPlay muted loop id="bg-video">
        <source src="bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner">
        <div className="slider" style={{ '--quantity': 8 }}>
          <div className="item" style={{ '--position': 1 }}><img src="image1.png" alt="" /></div>
          <div className="item" style={{ '--position': 2 }}><img src="image2.webp" alt="" /></div>
          <div className="item" style={{ '--position': 3 }}><img src="image3.avif" alt="" /></div>
          <div className="item" style={{ '--position': 4 }}><img src="image4.avif" alt="" /></div>
          <div className="item" style={{ '--position': 5 }}><img src="image5.jpg" alt="" /></div>
          <div className="item" style={{ '--position': 6 }}><img src="mainpopup.png" alt="" /></div>
          <div className="item" style={{ '--position': 7 }}><img src="image7.png" alt="" /></div>
          <div className="item" style={{ '--position': 8 }}><img src="image8.webp" alt="" /></div>
          <div className="item" style={{ '--position': 9 }}><img src="image6.webp" alt="" /></div>
          <div className="item" style={{ '--position': 10 }}><img src="image9.jpg" alt="" /></div>
          <div className="item" style={{ '--position': 11 }}><img src="image10.avif" alt="" /></div>
        </div>
        <div className="content">
          <div className="model">FaceSense</div>
        </div>
      </div>
      <div className="about-container" id="about-container" ref={aboutRef}>
        <img src="aboutimage1.jpg" id="about-image" className="aboutimage" alt="About" />
        <div className="about-text" id="about-text">
          <p>
            <mark>FaceSense</mark> is an AI-powered facial recognition application that captures video footage and detects human faces in real time. Using advanced image processing techniques, it identifies individuals, tracks their movements, and
            analyzes their presence within a designated area. Once a face is detected, the application highlights it with a green bounding box for clear visibility, ensuring accurate and efficient recognition. This web-based application seamlessly
            integrates with live video streams from sources such as IP cameras and local video files. It offers key functionalities like facial recognition, object tracking, and real-time monitoring, allowing users to track entry and exit events and
            generate reports on individual presence and duration. Designed for security monitoring and accessibility solutions, Face Sense features an intuitive user interface with real-time annotations and ensures data privacy by complying with relevant
            regulations. Its fast and precise detection capabilities enhance security, automation, and surveillance across various environments.
          </p>
        </div>
      </div>
      <footer className="foot">
        <div id="btns-foot">
          <button id="homeBtn-foot" onClick={handleHomeClick}>Home</button>
          <button id="cameraBtn-foot" onClick={handleCameraClick}>Camera</button>
          <button id="aboutBtn-foot" onClick={handleAboutClick}>About</button>
        </div>
        <h4>Copyright &copy; 2025 FaceSense. All rights reserved</h4>
      </footer>
    </div>
  );
}

export default Ani;

