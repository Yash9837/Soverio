import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-gray-300 py-12">
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Top section */}
                    <div className="mb-8 md:mb-0">
                        <h1 className="text-2xl font-bold mb-4">Soverio</h1>
                        <p>Built with love, engineered with passion.</p>
                        <div className="mt-4">
                            <a href="/" className="mr-4">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="/" className="mr-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className="mr-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Address */}
                        <div>
                            <h4 className="font-semibold mb-4">Address</h4>
                            <p className="mb-2">Abc nituk mark Delhi road, Mirzapur park,</p>
                            <p className="mb-2">Los Angeles, 201002, Uttar Pradesh, India.</p>
                            <h4 className="font-semibold mb-4">CBSE AFFILIATION NUMBER</h4>
                            <p className="mb-2">-2130750</p>
                        </div>

                        {/* Phone No */}
                        <div>
                            <h4 className="font-semibold mb-4">Phone No</h4>
                            <a href="tel:+9154216654545" className="block mb-2">+9154216654545</a>
                            <a href="tel:+9156255654545" className="block">+9156255654545</a>
                            <h4 className="font-semibold mb-4">SCHOOL CODE</h4>
                            <p className="mb-2">-52148</p>
                        </div>

                        {/* Email ID */}
                        <div>
                            <h4 className="font-semibold mb-4">Email ID</h4>
                            <a href="mailto:frontoffice@gmail.com" className="block mb-2">FRONT OFFICE:</a>
                            <a href="mailto:frontoffice@gmail.com" className="block mb-2">frontoffice@gmail.com</a>
                            <a href="mailto:admission@gmail.com" className="block mb-2">FOR ADMISSIONS</a>
                            <a href="mailto:admission@gmail.com">admission@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
