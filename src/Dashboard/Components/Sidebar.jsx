import React, { useState } from 'react';
import DashboardIcon from '../Images/dot.svg'; 
import ProfileIcon from '../Images/dot.svg';
import ApplicationIcon from '../Images/dot.svg';
import SavedJobIcon from '../Images/dot.svg';
import JobSearchIcon from '../Images/dot.svg';
import LogoutIcon from '../Images/dot.svg'; 
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: DashboardIcon, link: '/dashboard', active: true },
  { name: 'My Profile', icon: ProfileIcon, link: '/profile', active: false },
  { name: 'My Application', icon: ApplicationIcon, link: '/applicants', active: false },
  { name: 'Saved Jobs', icon: SavedJobIcon, link: '/jobposts', active: false },
  { name: 'Job Search', icon: JobSearchIcon, link: '/jobposts', active: false },

];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-900 text-white rounded-md shadow-lg"
      >
        {isOpen ? '✕' : '☰'}
      </button>

    
      <div className={`w-64 bg-gray-900 text-gray-300 h-full fixed top-0 left-0 z-20 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:top-16`}>
        <div className="p-4 pt-20 md:pt-8">
          <div className="flex items-center space-x-2 mb-8 border-b border-slate-700 pb-4">
            <h2 className="text-white text-xl font-semibold">Recruiter</h2>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex items-center space-x-3 p-3 rounded-lg transition duration-200 
                  ${item.active 
                    ? 'bg-blue-600 text-white font-bold' 
                    : 'hover:bg-slate-800'}`
                }
              >
                <img src={item.icon} alt={item.name} className="h-5 w-5 filter invert" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <Link 
              to=""
              className="flex items-center space-x-3 p-3 text-red-400 hover:bg-slate-800 rounded-lg transition duration-200 mt-8" 
            >
              <img src={LogoutIcon} alt="Logout" className="h-5 w-5 filter invert" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>

   
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;