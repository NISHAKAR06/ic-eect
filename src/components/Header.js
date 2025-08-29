import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/image.png" alt="ICEECT Logo" className="h-12 mr-4" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-300 transition-colors">HOME</a>
            <a href="#about" className="hover:text-blue-300 transition-colors">ABOUT US</a>
            <a href="#call-for-papers" className="hover:text-blue-300 transition-colors">CALL FOR PAPERS</a>
            <a href="#registration-details" className="hover:text-blue-300 transition-colors">REGISTRATION DETAILS</a>
            <a href="#submit-paper" className="hover:text-blue-300 transition-colors">SUBMIT YOUR PAPER</a>
            <a href="#committee" className="hover:text-blue-300 transition-colors">COMMITTEE</a>
            <a href="#for-authors" className="hover:text-blue-300 transition-colors">FOR AUTHORS</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-blue-300 transition-colors py-2">HOME</a>
            <a href="#about" className="hover:text-blue-300 transition-colors py-2">ABOUT US</a>
            <a href="#call-for-papers" className="hover:text-blue-300 transition-colors py-2">CALL FOR PAPERS</a>
            <a href="#registration-details" className="hover:text-blue-300 transition-colors py-2">REGISTRATION DETAILS</a>
            <a href="#submit-paper" className="hover:text-blue-300 transition-colors py-2">SUBMIT YOUR PAPER</a>
            <a href="#committee" className="hover:text-blue-300 transition-colors py-2">COMMITTEE</a>
            <a href="#for-authors" className="hover:text-blue-300 transition-colors py-2">FOR AUTHORS</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors py-2">CONTACT</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
