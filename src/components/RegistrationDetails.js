import React from "react";

function RegistrationDetails() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 w-full">
<h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          REGISTRATION DETAILS
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Registration Categories & Fees</h3>
          <table className="w-full mb-6 border border-gray-300 rounded">
            <thead>
              <tr className="bg-yellow-100">
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Indian Authors</th>
                <th className="py-2 px-4 border">Foreign Authors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">UG/PG Students</td>
                <td className="py-2 px-4 border">₹ 2000</td>
                <td className="py-2 px-4 border">$ 100</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Research Scholars</td>
                <td className="py-2 px-4 border">₹ 2500</td>
                <td className="py-2 px-4 border">$ 120</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Faculty/Academicians</td>
                <td className="py-2 px-4 border">₹ 3000</td>
                <td className="py-2 px-4 border">$ 150</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Industry Professionals</td>
                <td className="py-2 px-4 border">₹ 4000</td>
                <td className="py-2 px-4 border">$ 200</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Instructions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Each accepted paper must be registered by at least one author.</li>
            <li>Registration fee includes conference kit, lunch, and certificate.</li>
            <li>Payment should be made via the provided online portal or bank transfer.</li>
            <li>After payment, upload the transaction receipt during paper submission.</li>
            <li>For queries, contact the organizing committee.</li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded text-green-800 font-semibold text-center">
            For registration and payment details, visit the official conference website or contact us at <a href="mailto:conference@siet.ac.in" className="underline">conference@siet.ac.in</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationDetails;