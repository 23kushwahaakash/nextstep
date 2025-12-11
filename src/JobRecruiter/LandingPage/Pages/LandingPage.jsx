import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeaturesSection from '../Components/FeaturesSection';
import HowItWorksSection from '../Components/HowItWorksSection';
import FeaturedTalentSection from '../Components/FeaturedTalentSection';
import DashboardSection from '../Components/DashboardSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CompaniesSection from '../Components/CompaniesSection';
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturedTalentSection />
        <DashboardSection />
        <TestimonialsSection />
        <CompaniesSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage