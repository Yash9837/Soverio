import React from 'react';
import Logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-red-700 text-gray-300 py-12">
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Top section */}
                    <div className="mb-8 md:mb-0">
                    <img src={Logo} class="mr-3 w-max h-max sm:h-9" alt="Flowbite Logo" />
                        
                        <p className='pt-6 text-zinc-100'> Built with love, engineered with passion.</p>
                       
                    </div>

                    {/* Bottom section */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div>
                            <h4 className="font-semibold mb-4">Address</h4>
                            <p className="mb-2">Abc nituk mark Delhi road, Mirzapur park,</p>
                            <p className="mb-2">Los Angeles, 201002, Uttar Pradesh, India.</p>
                            <h4 className="font-semibold mb-4">CBSE AFFILIATION NUMBER</h4>
                            <p className="mb-2">-2130750</p>
                        </div>

                       
                        <div>
                            <h4 className="font-semibold mb-4">Phone No</h4>
                            <a href="tel:+9154216654545" className="block mb-2">+9154216654545</a>
                            <a href="tel:+9156255654545" className="block">+9156255654545</a>
                            <h4 className="font-semibold mb-4">SCHOOL CODE</h4>
                            <p className="mb-2">-52148</p>
                        </div>

                      
                        <div>
                            <h4 className="font-semibold mb-4">Email ID</h4>
                            <a href="mailto:frontoffice@gmail.com" className="block mb-2">FRONT OFFICE:</a>
                            <a href="mailto:frontoffice@gmail.com" className="block mb-2">frontoffice@gmail.com</a>
                            <a href="mailto:admission@gmail.com" className="block mb-2">FOR ADMISSIONS</a>
                            <a href="mailto:admission@gmail.com">admission@gmail.com</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
