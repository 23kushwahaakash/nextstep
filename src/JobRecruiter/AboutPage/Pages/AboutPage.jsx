import React from 'react';
import Header from '../Components/Header'; 
import Footer from '../Components/Footer';
import AboutHero from '../Components/AboutHero';

const AboutPage = () => {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="pt-16">
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;