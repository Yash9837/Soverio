import React, { useState, useEffect } from 'react';
// import './Gallery.css'; // Import the CSS file for styling
import pic1 from '../images/WhatsApp Image 2024-05-07 at 14.52.40_3f86c384.jpg';
import pic2 from '../images/WhatsApp Image 2024-05-07 at 14.52.40_5013d83f.jpg';
import pic3 from '../images/WhatsApp Image 2024-05-07 at 14.52.41_6553c690.jpg';
import pic4 from '../images/WhatsApp Image 2024-05-07 at 14.52.41_788619f0.jpg';
import pic5 from '../images/WhatsApp Image 2024-05-07 at 14.52.42_43fc1f0b.jpg';


const Gallery = () => {
  const [photos, setPhotos] = useState([
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic1,
    pic2,
    pic3
  ]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle the photos array to display different photos initially
  useEffect(() => {
    const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);
    setCurrentPhotos(shuffledPhotos.slice(0, 4));
  }, []);

  // Rotate the photos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 4) % photos.length;
      setCurrentPhotos(photos.slice(nextIndex, nextIndex + 4));
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, photos]);

  return (
    <div className="gallery-container py-10 px-12">
        <div className='text-white font-mono font-semibold text-3xl mb-5 text-center'>Gallery</div>
      <div className="grid grid-cols-4 gap-4">
        {currentPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="rounded-lg w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
