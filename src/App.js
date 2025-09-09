import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import About from './components/About';
import CallForPapers from './components/CallForPapers';
import RegistrationDetails from './components/RegistrationDetails';
import SubmitPaper from './components/SubmitPaper';
import Committee from './components/Committee';
import ForAuthors from './components/ForAuthors';
import Contact from './components/Contact';
import ImportantDates from './components/ImportantDates';
import SubTracks from './components/SubTracks';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <TopBanner />
      <Header />
<Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Hero />
            <About />
            <ImportantDates />
            <SubTracks />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/registration-details" element={<RegistrationDetails />} />
        <Route path="/submit-paper" element={<SubmitPaper />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/for-authors" element={<ForAuthors />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;