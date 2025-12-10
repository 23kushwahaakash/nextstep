import React from 'react';
import DashboardIcon from '../Images/dot.svg'; 
import ProfileIcon from '../Images/dot.svg';
import ApplicantsIcon from '../Images/dot.svg';
import JobPostsIcon from '../Images/dot.svg';
import LogoutIcon from '../Images/dot.svg'; 



const navItems = [
  { name: 'Dashboard', icon: DashboardIcon, link: '/dashboard', active: true },
  { name: 'My Profile', icon: ProfileIcon, link: '/profile', active: false },
  { name: 'My Applicants', icon: ApplicantsIcon, link: '/applicants', active: false },
  { name: 'My Job Posts', icon: JobPostsIcon, link: '/jobposts', active: false },
];

const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-gray-300 h-full fixed top-16 left-0 z-10 shadow-lg">
    <div className="p-4 pt-8">
      
      <div className="flex items-center space-x-2 mb-8 border-b border-slate-700 pb-4">
        <h2 className="text-white text-xl font-semibold">Recruiter</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`flex items-center space-x-3 p-3 rounded-lg transition duration-200 
              ${item.active 
                ? 'bg-blue-600 text-white font-bold' 
                : 'hover:bg-slate-800'}`
            }
          >
            <img src={item.icon} alt={item.name} className="h-5 w-5 filter invert" />
            
            <span>{item.name}</span>
          </a>
        ))}
        
        <a 
          href="/logout"
          className="flex items-center space-x-3 p-3 text-red-400 hover:bg-slate-800 rounded-lg transition duration-200 mt-8" 
        >
          <img src={LogoutIcon} alt="Logout" className="h-5 w-5 filter invert" />
          
          <span>Logout</span>
        </a>
      </nav>
    </div>
  </div>
);

export default Sidebar;