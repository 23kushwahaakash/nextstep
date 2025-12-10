import React from 'react';
import NextStepLogo from '../Images/logo.svg'; 
const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-16 px-8 bg-gradient-to-b from-gray-600 to-gray-900">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        
        <div className="col-span-2 md:col-span-1">
          
          <div className="flex items-center mb-4">
            <img 
              src={NextStepLogo} 
              alt="NextStep Logo" 
              className="h-6 w-auto mr-2 " 
            />
            <h4 className="text-2xl font-bold text-white">NextStep</h4>
          </div>
          
          <p className="text-sm">
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </p>
        </div>

        
        <div>
          <h5 className="font-bold text-white mb-4">About</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Companies</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Advice</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Updates</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <h5 className="font-bold text-white mb-4">Get job notifications</h5>
          <p className="text-sm mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          
          <div className="flex items-center space-x-3">
    
    <input
      type="email"
      placeholder="Email Address"
      className="bg-white text-gray-900 px-4 py-3 rounded-full focus:outline-none flex-grow"
    />
    
    <button 
      className="bg-gray-900 text-white font-semibold px-5 py-3 rounded-full transition duration-300 hover:bg-gray-700 shadow-md min-w-[120px]"
    >
      Subscribe
    </button>
  </div>
</div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm">
        <p>2023 @ NextStep. All rights reserved.</p> 
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="text-xl cursor-pointer hover:text-white transition">f</span>
          <span className="text-xl cursor-pointer hover:text-white transition"></span>
          <span className="text-xl cursor-pointer hover:text-white transition">G</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;