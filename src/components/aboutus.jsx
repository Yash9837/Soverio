import React from 'react';
import car from "../images/piccar.jpg";

const AboutUs = () => {
    return (
        <section className="py-32 bg-gradient-to-r from-red-700 to-black border-y border-zinc-400 font-mono">
            <div className="container flex flex-col lg:flex-row items-center  justify-center mx-16">
                {/* Photo */}
                <div className=" mb-8 lg:mb-0 lg:mr-12 max-w-2xl">
                    <img src= {car} alt="About Us" className="w-full h-auto rounded-md shadow-md" />
                </div>
                {/* Text */}
                <div className="max-w-2xl ml-40">
                    <h2 className=" text-6xl  text-white font-semibold mb-4">About Us</h2>
                    <p className="text-gray-100 text-base mb-4">Every season we create a new race car. On our account we have as many as twelve unique models of combustion cars, each successive one being able to easily beat the previous one. Last season saw the creation of the team’s first-ever electric car with autonomous driving systems – the RT12e. We are currently engaged in building our fourtheenth design. Already in the 2016/2017 season, we showed what the Poles can do. We were the first Polish team to win the entire edition of the Formula Student Italy competition. Since then, we have remained among the best teams in the world ranking and are ranked first in Poland and 11th in the world for the 2021 season.</p>
                    
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
