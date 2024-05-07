import React from 'react';
import backgroundImage from '../images/car.png';
import Header from './header';
import CarAnimation from './caranimation';



const Hero = () => {
  return (
    <div className="relative h-screen font-mono">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <Header/>
        <div className='text-white  flex flex-col place-items-end  mr-40  mt-64 '>
        <h2 className=' text-7xl mr-14 '>Team Soverio</h2>
        <p className='max-w pt-4 text-base mr-16 underline'>Built with love, engineered with passion.</p>
      </div>
      <div className='px-60'>
      <CarAnimation/>
      </div>
      
      </div>
      <div className="">
       
        
        
      </div>
    </div>
  )
}

export default Hero;
