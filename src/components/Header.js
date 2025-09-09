import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-950 text-white shadow-lg h-18">
      <nav className="container mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          {/* <div className="flex items-center">
            <img src="/image.png" alt="ICEECT Logo" className="h-12 mr-4" />
          </div> */}
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 w-full justify-end">
            <Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">ABOUT US</Link>
            <Link to="/call-for-papers" className="hover:text-blue-300 transition-colors">CALL FOR PAPERS</Link>
            <Link to="/registration-details" className="hover:text-blue-300 transition-colors">REGISTRATION DETAILS</Link>
            <Link to="/submit-paper" className="hover:text-blue-300 transition-colors">SUBMIT YOUR PAPER</Link>
            <Link to="/committee" className="hover:text-blue-300 transition-colors">COMMITTEE</Link>
            <Link to="/for-authors" className="hover:text-blue-300 transition-colors">FOR AUTHORS</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">CONTACT</Link>
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
            <Link to="/" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>HOME</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>ABOUT US</Link>
            <Link to="/call-for-papers" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>CALL FOR PAPERS</Link>
            <Link to="/registration-details" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>REGISTRATION DETAILS</Link>
            <Link to="/submit-paper" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>SUBMIT YOUR PAPER</Link>
            <Link to="/committee" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>COMMITTEE</Link>
            <Link to="/for-authors" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>FOR AUTHORS</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>CONTACT</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
