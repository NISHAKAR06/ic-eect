import React from 'react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import SubTracks from './components/SubTracks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Header />
      <Carousel />
      <Hero />
      <About />
      <ImportantDates />
      <SubTracks />
      <Footer />
    </div>
  );
}

export default App;
