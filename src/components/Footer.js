import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-[#041a36] text-white py-24"> {/* Darker background and increased height */}
      <div className="container mx-auto px-12"> {/* Increased px to 12 */}
        <div className="grid md:grid-cols-3 gap-8"> {/* Gap increased to 8, removed pb/pt */}
          {/* Column 1: Logo and Social Media */}
          <div className="flex flex-col items-center"> {/* Centered on all screen sizes */}
            <img src="/logo.png" alt="ICEECT Logo" className="h-48 mb-4" /> {/* Increased size to h-48 */}
            <div className="flex space-x-4"> {/* Social media icons */}
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <img src="/icons8-x.svg" alt="Twitter" className="h-6 w-6 filter-white" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <img src="/icons8-facebook.svg" alt="Facebook" className="h-6 w-6 filter-white" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <img src="/icons8-instagram.svg" alt="Instagram" className="h-6 w-6 filter-white" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <img src="/icons8-google-plus.svg" alt="Google+" className="h-6 w-6 filter-white" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <img src="/icons8-linkedin.svg" alt="LinkedIn" className="h-6 w-6 filter-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className='flex flex-col items-center'> {/* Centered content */}
            <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
            <div className="space-y-2 ">
              <a href="#home" className="block text-sm text-blue-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-sm text-blue-300 hover:text-white transition-colors">About Us</a>
              <a href="#call-for-papers" className="block text-sm text-blue-300 hover:text-white transition-colors">Call For Papers</a>
              <a href="#registration-details" className="block text-sm text-blue-300 hover:text-white transition-colors">Registration Details</a>
              <a href="#submit-paper" className="block text-sm text-blue-300 hover:text-white transition-colors">Submit your paper</a>
              <a href="#committee" className="block text-sm text-blue-300 hover:text-white transition-colors">Check Paper Status</a>
              <a href="#for-authors" className="block text-sm text-blue-300 hover:text-white transition-colors">Submission guidelines</a>
              <a href="#contact" className="block text-sm text-blue-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className='flex flex-col items-center'> {/* Centered content */}
            <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                Sri Shakthi Nagar, L & T By - Pass, Chinniyampalayam Post, Coimbatore 641062, Tamilnadu. India.
              </p>
              <p className="flex items-center text-sm">
                 <a href="mailto:admissions@siet.ac.in" className="text-blue-300 hover:text-white transition-colors">admissions@siet.ac.in</a>
              </p>
              <p className="flex items-center text-sm">
                 +91 12345 67890 (Placeholder)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-xs text-blue-300">
            Copyright © 2025 ICEECT. All rights reserved - Designed by SIET.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
