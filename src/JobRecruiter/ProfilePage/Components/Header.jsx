import React from 'react';
import SearchIcon from '../Images/search.svg'; 
import MicIcon from '../Images/mic.svg';
import HomeIcon from '../Images/home.svg';
import ChatIcon from '../Images/chat.svg';
import FlagImage from '../Images/flag.png';
import Profile from '../Images/profile-placeholder.svg'; 
import BellIcon from '../Images/bell.svg'; 
import LogoIcon from '../Images/logo.svg';
import ArrowIcon from '../Images/arrow-down.svg';   
const Header = () => (
  <header className="fixed top-0 w-full z-20 bg-white shadow-md ">
    <div className="flex justify-between items-center px-6 py-2 h-16">
      
      <div className="flex items-center space-x-6 w-3/5">
        
        <div className="flex items-center space-x-1 min-w-[120px]">
          <img src={LogoIcon} alt="NextStep Logo" className="h-6 w-auto" />
          <span className="text-xl font-bold text-gray-900">NextStep</span>
        </div>

        <div className="flex items-center bg-gray-100 p-2 rounded-full border border-gray-300">
          <img src={SearchIcon} alt="Search" className="h-5 w-5 ml-2 mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none placeholder-gray-500 text-sm w-full"
          />
          <img src={MicIcon} alt="Mic" className="h-5 w-5 mr-2 text-gray-500 cursor-pointer" />
        </div>
      </div>

      <nav className="flex items-center space-x-3 text-sm font-semibold">
        
        <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-900 cursor-pointer shadow-sm hover:bg-gray-100 min-w-[90px]">
          <img src={HomeIcon} alt="Home" className="h-5 w-5 mr-2" />
          Home
        </div>
        
        <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-900 cursor-pointer shadow-sm hover:bg-gray-100 min-w-[90px]">
          <img src={ChatIcon} alt="Chats" className="h-5 w-5 mr-2" />
          Chats
        </div>

        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-sm border border-gray-300 hover:bg-gray-100 ">
          <img src={BellIcon} alt="Notifications" className="h-5 w-5 text-blue-600" />
        </div>

        <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-1 py-1 cursor-pointer hover:bg-gray-100">
    <div className="p-0 border border-gray-400 rounded-lg overflow-hidden"> 
        <img 
            src={FlagImage} 
            alt="India flag" 
            className="h-4 w-6 object-cover rounded" 
        />
    </div>

    <div className="flex items-center justify-center">
        <img
            src={ArrowIcon}
            alt="Dropdown Arrow"
            className="h-3 w-3 object-cover" 
        />
    </div>
</div>

<div className="profile">
    <img 
        src={Profile}
        alt="Profile" 
        className="w-8 h-8 cursor-pointer object-cover rounded-full bg-blue-900 hover:bg-gray-500" 
    />
</div>
      </nav>
    </div>
  </header>
);

export default Header;