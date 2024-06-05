import React from 'react';
import pic from '../images/dummy-removebg-preview.png';

const OurTeam = () => {
  const teamMembers = [
    { name: "Ananaya Agarwal", post: "Manufacturing Engineer", photo: pic },
    { name: "Shivansh Tomar", post: "Head Graphic Designer", photo: pic },
    { name: "Nimishh Agarwal", post: "Team Manager, Design Engineer", photo: pic },
    { name: "Siddharth Kumar", post: "Graphic Designer", photo: pic },
    { name: "Akshat Singhal", post: "Resource Manager", photo: pic },
    { name: "Prabhav Singhal", post: "Sponsorship Manager", photo: pic }
  ];
  

  return (
    <section className="  py-8">
      <div className="max-w mx-auto sm:px-6 lg:px-2 ">
        <h2 className="text-4xl font-bold  text-center text-gray-300 mb-8">Team</h2>
        <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className=" rounded-lg mx-12 shadow-md overflow-hidden border border-zinc-500">
              <div className="relative h-72 bg-zinc-950">
                <img className="object-cover w-full h-full" src={member.photo} alt={member.name} />
              </div>
              <div className="py-4 border-t border-zinc-500 bg-zinc-800">
                <h3 className="text-xl text-center italic  text-gray-300 mb-2">{member.name}</h3>
                <p className=" text-center text-lg italic text-gray-400">{member.post}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
