import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-green-800 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/bg7.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            INTERNATIONAL CONFERENCE ON
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ELECTRICAL, ELECTRONICS AND COMMUNICATION TECHNOLOGY
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            (ICEECT)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-2 text-black">VENUE</h4>
              <p className="text-lg text-black">Sri Shakthi Institute of Engineering and Technology, Coimbatore, India</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-2 text-black">DATE</h4>
              <p className="text-lg text-black">(Friday and Saturday)</p>
              <p className="text-xl font-bold text-black">22nd & 23rd AUGUST 2025</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#registration-details" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a 
              href="https://ic-eect.in/Brouchers/Brochure_ECE.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
