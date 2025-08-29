import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">ABOUT</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">COIMBATORE</h3>
            <p className="text-gray-700 leading-relaxed">
              The perfect balance cosmopolitan city with rich cultural heritage is none other than "COIMBATORE"-The Manchester of South India. Coimbatore is the home of industrial manufacturing, textile hub also known as Cotton city. It started showing its pride in Educational and IT sector. Hence, Coimbatore hosts students and professionals from all parts of the world. It is the leading manufacturer and supplier of pumps and machineries in global market. The geographical significance, historical privilege and the economy is an additional conceit to the city. Tourist places at Coimbatore are Adiyogi Shiva- Dhyanalinga, Gedee Car Museum, Kovai Kutralam Water Falls. Ooty, Coonoor, Vaalparai, Palakkad, Siruvani Waterfalls, Topslip are the nearby tourist spots.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">THE COLLEGE</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sri Shakthi Institute of Engineering and Technology (SIET) was established in the year 2006 by our honorable Chairman Dr. S. Thangavelu, with the zeal to provide quality Engineering Education to the young minds and to make them innovative employable Engineers.
              </p>
              <p>
                Sri Shakthi is accredited by NAAC with A grade and also SIET is the youngest institution in India, accredited by National Board of Accreditation (NBA) for eight courses namely Mech, ECE, CSE, EEE, Agri, IT, BME and BT. We have been consecutively recognized as the best industry connect institute with platinum ranking by the AICTE- CII survey of Industry- linked technical Institutions for the years from 2014 to 2017 and received awards under Established Engineering Institution for Electronics & allied courses in 2017 and in 2014 as Emerging Engineering Institution category as close competitor.
              </p>
              <p>
                Sri Shakthi symbolizes 'creative & progressive power' of dynamic youth and ranked among top 10 percent of 3000 colleges across India to receive National Employability Award and The Times Group Award for Excellence in Education. We are the pioneer Institute in India, chosen by Indian Electronics & Semiconductor Industries Association to launch their premier courses on VLSI design and embedded product design The Institute is also collaborated with worldwide Universities and industries to support our mission. Oracle, CISCO, National Instruments, Cadence, Xilinx, Infosys, Wipro, MindTree, AMI, Siemens, Dassault Systems, TTK prestige, HP Enterprise, Virtusa Polaris, Gyan Matrix, IESA, NASSCOM, IEI, ISTE, IEEE and ITB are few among them. The institute currently offers thirteen Bachelor's degree programs in the field of Agricultural, Bio Medical, Bio Technology, Electrical and Electronics, Electronics and Communication, Computer Science, Food Technology, Information Technology, Mechanical, Cyber Security, AI-ML, AI-DS, EE (VLSI Design and Technology) and Civil, and Master degree programs in the fields of VLSI Design, Engineering Design, Structural Engineering, Computer Science and Engineering, CAD/CAM, Embedded System Technology, Farm Machinery and Food Technology.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">THE DEPARTMENT</h3>
          <p className="text-gray-700 leading-relaxed">
            The department of ECE was started during 2006. The departments offers 4 year Under graduate (UG) and 2 years Post graduation (PG) programme in M.E., VLSI and Embedded Systems. The student intake for UG programme is 180 (ECE), 24 (VLSI and Embedded Systems). The UG programme is accredited by NBA and the departments are recognized as research centres by Anna University, Chennai. The undergraduate degree courses offered by the departments provide a comprehensive foundation in the core topics of ECE coupled with areas of specialization relevant to emerging engineering challenges. The departments has highly-qualified and experienced faculty members, state-of-the-art facilities and the extensive industry-academia interaction serve to make engineering education a unique and enriching experience that shapes the future of the industry.
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">THE CONFERENCE</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The International Conference on Electrical, Electronics and Communication Technology (6th Edition) aims in providing a premier interdisciplinary platform for leading academic scientists, Industry peers, Research fellows, and students to share the latest research and information on recent innovation, practical challenges encountered and solutions adopted in the fields of Electrical, Electronics and Communication Engineering to promote through quality research. The conference will provide networking opportunities, develop suitable solutions for diverse applications and modern technologies, and also help in providing solutions for sustainable development. All submitted papers will be reviewed by a double-blind peer review process to maintain high-quality publications. Paper submitted and accepted by the review committee of the International Conference on Electrical, Electronics and Communication Technology (ICEECT'25) will be recommended to one of the relevant journals listed below.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Recommended Journals:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Proceedings on Engineering Sciences (Scopus)</li>
                <li>International Journal of Science, Mathematics and Technology Learning</li>
                <li>International Journal on Educational Administration:Theory and Practice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
