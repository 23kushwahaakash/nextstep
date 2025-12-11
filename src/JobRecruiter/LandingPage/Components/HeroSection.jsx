import React from 'react';
import HeroBackground from '../images/hero-bg.svg';
import CandidateIcon from '../images/candidates.svg';
import RecruiterIcon from '../images/recruiters.svg';
import GrowthIcon from '../images/growth.svg';
import { useNavigate } from "react-router-dom";

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="p-3 mb-2 bg-emerald-400/20 rounded-full border border-emerald-400/50">
      <img src={icon} alt={label} className="h-6 w-6 text-emerald-400" />
    </div>
    <span className="text-3xl font-bold">{value}</span>
    <span className="text-sm text-gray-300">{label}</span>
  </div>
  
);

const HeroSection = () => (
  <section className="relative h-[650px] overflow-hidden bg-gray-900">
    
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
    
  
    <div className="relative flex flex-col items-center justify-center h-full text-white pt-24">
      <h1 className="text-6xl font-extrabold mb-6 text-center leading-tight">
        Hire the <span className="text-emerald-400">Right Talent</span> Faster!
      </h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Post jobs, manage candidates, and build your employer brand - all in one place.
      </p>

      <div className="flex space-x-4 mb-20">
        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-white hover:text-gray-900 shadow-lg " onClick={()=>navigate("/jobrecruiter/HomePage")}>
          Post A Job Now
        </button>
        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-white hover:text-gray-900 shadow-lg" onClick={()=>navigate("/jobrecruiter/ProfilePage")}>
          Create Recruiter Profile
        </button>
      </div>

      <div className="flex justify-center space-x-16 mt-8">
        <StatCard icon={CandidateIcon} value="1M+" label="Active Candidates" />
        <StatCard icon={RecruiterIcon} value="50K+" label="Verified Recruiters" />
        <StatCard icon={GrowthIcon} value="Fastest" label="Growing Platform" />
      </div>
    </div>
  </section>
);

export default HeroSection;