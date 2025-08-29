import React from 'react';
import Header from './components/Header';
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
    <div className="App">
      <Header />
      <Hero />
      <About />
      <CallForPapers />
      <RegistrationDetails />
      <SubmitPaper />
      <Committee />
      <ForAuthors />
      <Contact />
      <ImportantDates />
      <SubTracks />
      <Footer />
    </div>
  );
}

export default App;
