import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <div className="space-y-2">
              <a href="#registration-details" className="block text-blue-300 hover:text-white transition-colors">
                Registration Details
              </a>
              <a href="#call-for-papers" className="block text-blue-300 hover:text-white transition-colors">
                Call For Papers
              </a>
              <a href="#submit-paper" className="block text-blue-300 hover:text-white transition-colors">
                Submit Your Paper
              </a>
              <a href="#for-authors" className="block text-blue-300 hover:text-white transition-colors">
                For Authors
              </a>
              <a href="#committee" className="block text-blue-300 hover:text-white transition-colors">
                Committee
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT INFORMATION</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h4>
              <p>Sri Shakthi Nagar, L & T By - Pass,</p>
              <p>Chinniyampalayam Post</p>
              <p>Coimbatore 641062.</p>
              <p>Tamilnadu. India.</p>
              <a href="mailto:admissions@siet.ac.in" className="text-blue-300 hover:text-white transition-colors">
                admissions@siet.ac.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">CONFERENCE INFO</h3>
            <div className="space-y-2">
              <p className="font-semibold">ICEECT 2025</p>
              <p>6th International Conference</p>
              <p>August 22-23, 2025</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="mb-4">
            <a 
              href="https://ic-eect.in/Brouchers/Brochure_ECE.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-300 hover:text-white transition-colors font-semibold"
            >
              Download ICEECT BROCHURE
            </a>
          </p>
          <p className="text-sm text-blue-300">
            Copyright © 2025 ICEECT. All rights reserved - Designed by SIET.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
