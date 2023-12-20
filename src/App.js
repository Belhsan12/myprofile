import React from 'react';
//import header
import Header from './components/Header';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import FactsSection from './components/Facts';
import ResumeSection from './components/Resume';
import Portfolio from './components/Portfolio';
import ServicesSection from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
//import CerficatesSection
import CerficatesSection from './components/Certificates';


function App() {
  const show = false
  return (
<div>
  <Header />
  <HeroSection />
  <main id="main">
    <AboutSection />
    <FactsSection />
    <Skills />
    <ResumeSection />
    {show &&<Portfolio />}
    <ServicesSection />
    <CerficatesSection />
    <Contact />
    <Footer />


    </main>
</div>

  );
}

export default App;