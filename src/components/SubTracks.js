import React from 'react';

function SubTracks() {
  const tracks = [
    {
      title: "INDUSTRIAL COMMUNICATIONS AND SIGNAL PROCESSING",
      description: "Communication Technologies for Industry 4.0; Green Communication in Industry; Energy- Efficient; Resource-Saving and Environment-Friendly Networking; Energy-Saving and Energy- Harvesting Networks; Green Design Networks; Self-Configurable Networks; Real-time in Industrial Communication Systems and Technologies; Wired and Wireless Industrial Networks; FSO; VLC; UWB; Antennas and Electromagnetic Fields; Industrial Ethernet Networks; Industrial Wireless Sensor Networks; Hybrid Wired/Wireless Industrial Networks; Time Sensitive Networks; Time-Triggered Systems and Protocols; Hard and Soft Real-Time Message Scheduling; Networked Embedded Systems; Industrial Image Processing, Remote Sensing, Sensor Fusion, Industrial Internet of things (IIoT); Industrial Internet of Services (IIS), Smart Protocols, Signal Processing for Industrial Applications, Signal Processing for Smart Systems.",
      icon: "📡"
    },
    {
      title: "INDUSTRIAL SENSORS AND INDUSTRIAL INFORMATICS",
      description: "Smart Factories, Smart Manufacturing, Smart Sensors, Smart Tooling, Smart Measurement Techniques, Biological Inspired Sensors, Sensors for Autonomous vehicles/ Electric vehicles; Design and prototyping of smart sensors, Wireless Energy Transfer, Energy Harvesting Medical Devices; and any combination of above areas with emphasis on measurement with and without sensors will also be considered, RTOS Based Applications, Embedded System Security, Digital System Design and Structures, Industrial Artificial Intelligence (AI), Industrial Machine Learning (ML), Human-Machine Interactions, Diagnosis and Prognosis.",
      icon: "🔧"
    },
    {
      title: "INDUSTRIAL CONTROL & APPLICATIONS",
      description: "Smart Manufacturing, Additive Manufacturing, Autonomous and Electric vehicles; Autonomous Agents; Cognitive Approach for Industrial Robotics; Collective and Social Robots; Control and Supervision in Industrial Systems; Engineering Applications on Robotics and Automation; Guidance, Navigation and Control in Smart Factories; Advance Automation and Control techniques related to Smart Industry and Smart Commercial Machines, Smart Robotics Science and Technology.",
      icon: "🤖"
    },
    {
      title: "POWER AND ENERGY SYSTEMS (SPECIAL FOCUS ON SMART APPLICATIONS)",
      description: "Power and Energy Systems for Smart Industry; New Energy Vehicles, Internet Energy Equipment; Green Building; Materials and Energy-saving Buildings; Renewable Energy Sources and Systems; Battery Technology – Materials and Systems; Other Energy Storage Systems; Micro-grid and Nano-grid; Energy management of Micro Grid; Building Energy Management, Signal Processing for the Smart Grid.",
      icon: "⚡"
    },
    {
      title: "INDUSTRIAL ELECTRONICS",
      description: "Smart Materials (Piezoelectric, SMA, SMP, MSMA, ER/MR fluid, Optical Fibre, Polymer Gel etc.), Applications of Smart Structures, Microelectronic design, manufacturing, and integration, Smart sensors and instrumentation systems.",
      icon: "💡"
    },
    {
      title: "INVITED AND SPECIAL TRACKS",
      description: "The papers not aligning in the above tracks but found suitable and related to the conference theme will be included in the special track.",
      icon: "🎯"
    }
  ];

  return (
    <section id="sub-tracks" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">SUB TRACKS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-blue-600 mb-4 text-center">{track.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">{track.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{track.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-800 text-white p-8 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">ICEECT BROCHURE</h3>
          <p className="text-lg mb-6">
            Download the official brochure for the International Conference on Electrical, Electronics and Communication Technology.
          </p>
          <a 
            href="https://ic-eect.in/Brouchers/Brochure_ECE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-md inline-block"
          >
            DOWNLOAD NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default SubTracks;
