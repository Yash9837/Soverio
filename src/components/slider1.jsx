import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6', 'Text 7', 'Text 8'];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transitionDuration = 500; // milliseconds

  const nextIndex = (currentIndex + 1) % texts.length;
  const prevIndex = (currentIndex - 1 + texts.length) % texts.length;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Transition
        show={true}
        enter="transition-transform ease-out duration-500"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform ease-in duration-500"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <div className="absolute inset-0 flex">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-full h-full text-white text-4xl bg-blue-500 transform transition-transform ${
                index === currentIndex ? '' : 'translate-x-full'
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </Transition>
      <button
        className="absolute inset-y-0 left-0 flex items-center px-4 text-white bg-blue-500"
        onClick={() => setCurrentIndex(prevIndex)}
      >
        Prev
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500"
        onClick={() => setCurrentIndex(nextIndex)}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
