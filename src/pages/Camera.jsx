import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";
import logo from "../assets/logo.jpg";
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

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

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.style.display = "block";
  
      // Convert canvas to blob
      canvas.toBlob(async (blob) => {
        if (!blob) return;
  
        const formData = new FormData();
        formData.append("image", blob, "capture.jpg");
  
        try {
          const response = await axios.post(`${apiUrl}/recognize`, formData);
          const faces = response.data.faces;
  
          faces.forEach(face => {
            const { x, y, width, height } = face.box;
            const name = face.name;
  
            // Draw rectangle
            context.strokeStyle = "lime";
            context.lineWidth = 2;
            context.strokeRect(x, y, width, height);
  
            // Draw label
            context.fillStyle = "yellow";
            context.font = "16px Arial";
            context.fillText(name, x, y - 10);
          });
        } catch (error) {
          console.error("Recognition failed:", error);
          alert("Recognition failed");
        }
      }, "image/jpeg");
    }
  };
  

  return (
    <div className="body">
      <Header />
  
      <div>
        <button id="captureBtn" onClick={captureImage}>Capture</button>
      </div>
  
      <div id="video-container">
        <video ref={videoRef} autoPlay playsInline className="video-feed"></video>
        <canvas ref={canvasRef} id="capturedImage"></canvas>
      </div>
  
      <Footer />
    </div>
  );
};

export default Camera;
