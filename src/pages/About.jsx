import React from "react";
import "../App.css"; 


const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          <mark>FaceSense</mark> is an advanced facial recognition-based attendance tracking system designed to streamline student monitoring.
          It uses AI-powered facial recognition to automate attendance marking, ensuring accuracy, security, and efficiency.
        </p>
      </div>
      <img src="/aboutimage.jpg" id="about-image" className="aboutimage" alt="About FaceSense" />
    </div>
  );
};

export default About;
