import React from 'react'

import Header from './components/header'
import Hero from './components/hero'
import Carousel from './components/slider'
import TextSlider from './components/textslider'
import Sponsors from './components/sponsors'
import MissionSection from './components/element'
import OurMotive from './components/ourmotive'
import OurTeam from './components/ourteam'
import Footer from './components/footer'
import SocialMediaHandles from './components/socialmedia'
import AboutUs from './components/aboutus'
import CarAnimation from './components/caranimation'


function App() {
  return (
    <div className=" bg-black">
      
      <Hero/>
      
      
      <Sponsors/>
      
      <AboutUs/>
      <OurMotive/>
      <MissionSection/>
      <OurTeam/>
      <SocialMediaHandles/>
      <Footer/>
      
      
      
      

      
    </div>
    
  )
}

export default App
