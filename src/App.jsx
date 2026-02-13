import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import WhyChooseUs from './components/WhyChooseUs';
import SloganSection from './components/SloganSection';
import Certifications from './components/Certifications';
import PosterSection from './components/PosterSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="section-hero"><Hero /></div>
        <div className="section-about"><About /></div>
        <div className="section-why"><WhyChooseUs /></div>
        <div className="section-slogan"><SloganSection /></div>
        <div className="section-certifications"><Certifications /></div>
        <div className="section-poster"><PosterSection /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
