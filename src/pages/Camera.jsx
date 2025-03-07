import React, { useRef, useEffect } from 'react';
import './Camera.css';

function Camera() {
  useEffect(() => {
    startWebcam();
  }, []);

  const startWebcam = () => {
    const videoElement = videoRef.current;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoElement.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing webcam: ', error);
          alert('Could not access webcam. Please allow camera permissions.');
        });
    } else {
      alert('Your browser does not support webcam access.');
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!video.srcObject) {
      alert('Camera is not active. Please allow access and try again.');
      return;
    }

    if (video.videoWidth === 0 || video.videoHeight === 0) {
      alert('Camera is not fully loaded yet. Please wait and try again.');
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.style.display = 'block';
  };

  const handleHomeClick = () => {
    window.location.href = 'ani.js';
  };

  const handleAboutClick = () => {
      window.location.href = 'ani.js#about-container';
  };

  const handleCameraClick = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  return (
    <>
      <div className="heading">
        <img src="logo.jpg" alt="Logo" id="logo" />
        <div id="title">FaceSense</div>
        <div id="btns">
          <button id="homeBtn" onClick={handleHomeClick}>Home</button>
          <button id="cameraBtn" onClick={handleCameraClick}>Camera</button>
          <button id="aboutBtn" onClick={handleAboutClick}>About</button>
        </div>
      </div>
      <div id="camera-container" className="vid">
        <video id="webcam" autoPlay playsInline ref={videoRef}></video>
        <div style={{ textAlign: 'center' }}>
          <canvas id="capturedImage" ref={canvasRef}></canvas>
        </div>
      </div>
      <div>
        <button id="captureBtn" onClick={captureImage}>Capture</button>
      </div>
      <footer className="foot">
        <div id="btns-foot">
          <button id="homeBtn-foot" onClick={handleHomeClick}>Home</button>
          <button id="cameraBtn-foot" onClick={handleCameraClick}>Camera</button>
          <button id="aboutBtn-foot" onClick={handleAboutClick}>About</button>
        </div>
        <h4>Copyright &copy; 2025 FaceSense. All rights reserved</h4>
      </footer>
    </>
  );
}

export default Camera;