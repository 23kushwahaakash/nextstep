import React from 'react';
import HeroBackground from '../images/hero-bg.svg';
import CandidateIcon from '../images/candidates.svg';
import RecruiterIcon from '../images/recruiters.svg';
import GrowthIcon from '../images/growth.svg';
import { Link } from "react-router-dom";

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="p-2 md:p-3 mb-2 bg-emerald-400/20 rounded-full border border-emerald-400/50">
      <img src={icon} alt={label} className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
    </div>
    <span className="text-xl md:text-3xl font-bold">{value}</span>
    <span className="text-xs md:text-sm text-gray-300">{label}</span>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-[650px] md:h-[750px] overflow-hidden bg-gray-900 py-12 md:py-0">
    
    <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
    
    <div className="relative flex flex-col items-center justify-center h-full text-white px-4 md:pt-24">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-center leading-tight">
        Hire the <span className="text-emerald-400">Right Talent</span> Faster!
      </h1>
      
      <p className="text-lg md:text-xl mb-8 md:mb-12 text-center max-w-2xl">
        Post jobs, manage candidates, and build your employer brand - all in one place.
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12 md:mb-20 w-full md:w-auto px-6 md:px-0">
        <Link to="/jobrecruiter/HomePage" className="w-full md:w-auto">
          <button className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-white hover:text-gray-900 shadow-lg">
            Post A Job Now
          </button>
        </Link>
        <Link to="/jobrecruiter/ProfilePage" className="w-full md:w-auto">
          <button className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-white hover:text-gray-900 shadow-lg">
            Create Recruiter Profile
          </button>
        </Link>
      </div>

      <div className="flex justify-center space-x-6 md:space-x-16 mt-4">
        <StatCard icon={CandidateIcon} value="1M+" label="Active Candidates" />
        <StatCard icon={RecruiterIcon} value="50K+" label="Verified Recruiters" />
        <StatCard icon={GrowthIcon} value="Fastest" label="Growing" />
      </div>
    </div>
  </section>
);

export default HeroSection;