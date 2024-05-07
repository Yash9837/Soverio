import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  'Text 1',
  'Text 2',
  'Text 3',
  'Text 4',
  'Text 5',
  'Text 6',
  'Text 7',
  'Text 8'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideCount = slides.length;
  const transitionDuration = 0.5; // Adjust for desired animation speed (seconds)

  const handleNext = () => {
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % slideCount;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Adjust for desired auto-play interval (milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), transitionDuration * 1000); // Timeout for animation completion
  }, [currentIndex, isAnimating]);

  const slideVariants = {
    initial: { x: '-200%' }, // Start off-screen (adjust based on visual style)
    enter: {
      x: 0,
      transition: { duration: transitionDuration, ease: 'easeInOut' },
    },
    exit: {
      x: '200%',
      transition: { duration: transitionDuration, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative overflow-hidden w-full md:w-3/4 h-48"> {/* Adjust width and height as needed */}
      <motion.div
        className="flex justify-between"
        animate={{ x: -currentIndex * 50 + '%' }} // Adjust percentage based on visual style
        transition={{ duration: transitionDuration }}
      >
        {[...slides.slice(currentIndex), ...slides.slice(0, currentIndex)].map(
          (slide, index) => (
            <motion.div
              key={index}
              className="w-1/2 text-center text-xl font-bold bg-gray-200 rounded-md overflow-hidden"
              variants={slideVariants}
              initial={isAnimating ? 'exit' : 'initial'}
              animate={isAnimating ? 'enter' : 'exit'}
            >
              {slide}
            </motion.div>
          )
        )}
      </motion.div>
      <button
        className="absolute top-1/2 right-2 focus:outline-none"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
