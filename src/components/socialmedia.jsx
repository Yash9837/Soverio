import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaHandles = () => {
    return (
        
    <div className="flex justify-center space-x-8 py-5 border-y border-zinc-700 ">
            <a href="https://www.facebook.com/team.soverio" className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
                
                <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com/team_soverio" className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
                <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/team.soverio/" className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
                <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/team-soverio-489065233/" className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
                <FaLinkedinIn className="text-2xl" />
            </a>
        </div>
    );
}

export default SocialMediaHandles;
