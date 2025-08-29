import React from 'react';

function ImportantDates() {
  const dates = [
    {
      id: 1,
      title: "PAPER SUBMISSION OPENS",
      date: "5th June 2025",
      description: "Start preparing and submitting your research papers."
    },
    {
      id: 2,
      title: "PAPER SUBMISSION DEADLINE",
      date: "15th July 2025",
      description: "Ensure all papers are submitted by this date."
    },
    {
      id: 3,
      title: "PAPER ACCEPTANCE NOTIFICATION",
      date: "21st July 2025",
      description: "Authors will be notified of their paper's acceptance status."
    },
    {
      id: 4,
      title: "CAMERA READY PAPER SUBMISSION AND REGISTRATION DEADLINE",
      date: "8th August 2025",
      description: "Final versions of accepted papers and registration must be completed."
    },
    {
      id: 5,
      title: "CONFERENCE DATES",
      date: "22nd & 23rd August 2025",
      description: "Join us for the main conference event!"
    }
  ];

  return (
    <section 
      id="important-dates" 
      className="relative py-16 bg-cover bg-center" 
      style={{ backgroundImage: 'url(/enroll-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay for readability */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">IMPORTANT DATES</h2>

        <div className="relative border-l-2 border-blue-400 ml-4 md:ml-1/2">
          {dates.map((item, index) => (
            <div key={item.id} className="mb-8 flex items-center w-full">
              <div className="absolute w-12 h-12 bg-blue-600 rounded-full -left-0.5 transform -translate-x-1/2"></div>
              <div className="ml-12 p-4 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm w-full">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-lg font-bold text-yellow-300 mb-2">{item.date}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantDates;
