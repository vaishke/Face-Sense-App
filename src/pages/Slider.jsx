import React, { useEffect, useState } from "react";
import "../App.css";

// Import images
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.webp";
import mainpopup from "../assets/mainpopup.png";

// Store them in an array
const images = [image1, image2, image3, image4, image5, image6, mainpopup];

const Slider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((src, index) => (
        <div
          key={index}
          className="item"
          style={{
            transform: `translateX(${(index - active) * 120}px) scale(${1 - Math.abs(index - active) * 0.2})`,
            zIndex: index === active ? 1 : -1,
            opacity: index === active ? 1 : 0.6,
          }}
        >
          <img src={src} className="moving-image" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
