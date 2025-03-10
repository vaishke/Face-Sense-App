import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";

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
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop()); // Stop each track when unmounting
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
    <div>
      <header className="heading">
        <button onClick={() => navigate(-1)}>Back</button>
      </header>

      <div className="vid">
        <video ref={videoRef} autoPlay playsInline />
      </div>

      <button id="captureBtn" onClick={captureImage}>Capture</button>

      <canvas ref={canvasRef} />
    </div>
  );
};

export default Camera;
