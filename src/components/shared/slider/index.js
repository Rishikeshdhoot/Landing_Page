import React, { useState, useEffect } from "react";
import Styles from "./slider.module.css";
const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={Styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === activeIndex ? Styles.active : Styles.slide}
        >
          <img
            className={Styles.image}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
