import React, { useState, useEffect } from 'react';

const allTexts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6', 'Text 7', 'Text 8'];

const TextSlider = () => {
  const [visibleTexts, setVisibleTexts] = useState(allTexts.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate the texts
      const rotatedTexts = [...visibleTexts.slice(1), visibleTexts[0]];
      setVisibleTexts(rotatedTexts);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [visibleTexts]);

  return (
    <div className="text-slider relative overflow-hidden">
      <div className="slider-track absolute top-0 left-0 w-full h-full flex transition-transform duration-500">
        {visibleTexts.map((text, index) => (
          <div key={index} className="text-item flex-shrink-0 w-1/4 p-4">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
