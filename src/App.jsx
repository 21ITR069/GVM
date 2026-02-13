import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import './App.css';

// Lazy load components below the fold
const About = React.lazy(() => import('./components/About'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const SloganSection = React.lazy(() => import('./components/SloganSection'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const PosterSection = React.lazy(() => import('./components/PosterSection'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Preloader />
      <div className="App">
        <Navbar />
        <main>
          <div className="section-hero"><Hero /></div>

          <Suspense fallback={<div className="section-loader"></div>}>
            <div className="section-about"><About /></div>
            <div className="section-why"><WhyChooseUs /></div>
            <div className="section-slogan"><SloganSection /></div>
            <div className="section-certifications"><Certifications /></div>
            <div className="section-poster"><PosterSection /></div>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
