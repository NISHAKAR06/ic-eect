import React from 'react';

function ImportantDates() {
  const dates = [
    {
      id: 1,
      title: "PAPER SUBMISSION OPENS",
      date: "5th June 2025",
      icon: "📝"
    },
    {
      id: 2,
      title: "PAPER SUBMISSION DEADLINE",
      date: "15th July 2025",
      icon: "⏰"
    },
    {
      id: 3,
      title: "PAPER ACCEPTANCE NOTIFICATION",
      date: "21st July 2025",
      icon: "✅"
    },
    {
      id: 4,
      title: "CAMERA READY PAPER SUBMISSION AND REGISTRATION DEADLINE",
      date: "8th August 2025",
      icon: "📄"
    },
    {
      id: 5,
      title: "CONFERENCE DATES",
      date: "22nd & 23rd August 2025",
      icon: "🎯"
    }
  ];

  return (
    <section id="important-dates" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">IMPORTANT DATES</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dates.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <div className="text-4xl text-blue-600">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-xl font-bold text-blue-700">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantDates;
