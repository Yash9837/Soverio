import React, { useState, useEffect } from 'react';
import './CarAnimation.css'; 
import sss from '../images/Screenshot_2024-05-07_154433-removebg-preview.png';
// Import the CSS file for styling

const CarAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <img
        className="car  h-max absolute top-52 transition-transform duration-500"
        src={sss} // Replace with the path to your car image
        alt="Moving Car"
        style={{ left: `${scrollPosition}px` }}
      />
    </div>
  );
};

export default CarAnimation;
