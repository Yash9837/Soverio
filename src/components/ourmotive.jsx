import React from 'react';

const OurMotive = () => {
  return (
    <section className="bg-black font-mono italic shadow-2xl py-16">
      <div className="max-w mx-16 px-16 sm:px-6 lg:px-2">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-16">Our Motive</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Motive 1 */}
          <div className="bg-neutral-950 border border-zinc-800 rounded-lg  overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Passion for Excellence</h3>
              <p className="text-gray-400 text-lg">We strive for excellence in every aspect of our team, from engineering to racing strategy, pushing boundaries to achieve the best possible outcomes.</p>
            </div>
          </div>
          
          {/* Motive 2 */}
          <div className="bg-neutral-950 border border-zinc-800 rounded-lg  overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Innovation and Adaptability</h3>
              <p className="text-gray-400 text-lg">We embrace innovation and are always looking for ways to improve. We adapt quickly to new challenges, leveraging technology and expertise to stay ahead of the competition.</p>
            </div>
          </div>
          
          {/* Motive 3 */}
          <div className="bg-neutral-950 border border-zinc-800 rounded-lg shadow-md overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Teamwork and Collaboration</h3>
              <p className="text-gray-400 text-lg">We believe in the power of teamwork. Collaboration among team members, drivers, and partners is essential for achieving our goals and overcoming obstacles together.</p>
            </div>
          </div>
          
          {/* Motive 4 */}
          <div className="bg-neutral-950 border border-zinc-800 rounded-lg shadow-md overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Commitment to Success</h3>
              <p className="text-gray-400 text-lg">We are committed to success, both on and off the track. Our dedication, discipline, and determination drive us to continuously improve and strive for victory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMotive;
