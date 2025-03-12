import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";
import logo from "../assets/logo.jpg";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Could not access webcam. Please allow camera permissions.");
      }
    };

    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.style.display = "block"; // Show canvas after capturing
    }
  };

  return (
    <div className="body">
      {/* Header */}
      <div className="heading-cam">
        <img src={logo} alt="Logo" id="logo-cam" />
        <div id="title-cam">FaceSense</div>
        <div id="btns-cam">
          <button onClick={() => navigate("/")}>Home</button> {/* Navigates to FaceSense.jsx */}
          <button onClick={() => navigate("/camera")}>Camera</button>
          <button onClick={() => navigate("/", { state: { scrollToAbout: true } })}>About</button>
 {/* Scrolls to About Section */}
        </div>
      </div>
  
      {/* Camera Section */}
      <div>
        <button id="captureBtn" onClick={captureImage}>Capture</button>
      </div>

      <div id="video-container">
        <video ref={videoRef} autoPlay playsInline className="video-feed"></video>
        <canvas ref={canvasRef} id="capturedImage"></canvas>
      </div>

      {/* Footer */}
      <footer className="foot-cam">
        <div id="btns-foot-cam">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/camera")}>Camera</button>
          <button onClick={() => navigate("/#about-image")}>About</button>
        </div>
        <h4>Copyright &copy; 2025 FaceSense. All rights reserved</h4>
      </footer>
    </div>
  );
};

export default Camera;
