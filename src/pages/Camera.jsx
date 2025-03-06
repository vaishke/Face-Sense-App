import React, { useRef, useEffect } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing webcam: ", error);
        alert("Could not access webcam. Please allow camera permissions.");
      }
    };
    startWebcam();
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.style.display = "block";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video ref={videoRef} autoPlay playsInline style={{ borderRadius: "10px", border: "5px solid black", width: "40%" }}></video>
      <button onClick={captureImage} style={{ margin: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Capture
      </button>
      <canvas ref={canvasRef} style={{ display: "none", border: "5px solid black", width: "80%", borderRadius: "10px" }}></canvas>
    </div>
  );
};

export default Camera;
