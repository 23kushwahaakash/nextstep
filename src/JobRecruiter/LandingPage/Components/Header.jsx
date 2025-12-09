import React from 'react';
import FlagImage from '../images/flag.png';
import SearchIcon from '../images/search.svg';
import MicIcon from '../images/mic.svg';
import HomeIcon from '../images/home.svg';
import ChatIcon from '../images/chat.svg';
import ProfileAvatar from '../images/profile-placeholder.svg'; 


const Header = () => (
  <header className="absolute top-0 w-full z-10 text-white">
    <div className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-6">
        <div className="text-xl font-bold">NextStep</div>
        <div className="flex items-center bg-white/20 p-2 rounded-full backdrop-blur-sm hidden md:flex">
          <img src={SearchIcon} alt="Search" className="h-5 w-5 mr-2 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none placeholder-gray-300 text-sm w-48"
          />
        </div>
        <img src={MicIcon} alt="Mic" className="h-5 w-5 cursor-pointer hidden md:block" />
      </div>

  
      <nav className="flex items-center space-x-6">
        <div className="flex items-center bg-white/30 px-4 py-2 rounded-full font-semibold">
          <img src={HomeIcon} alt="Home" className="h-5 w-5 mr-2" />
          Home
        </div>
        <img src={ChatIcon} alt="Chats" className="h-6 w-6 cursor-pointer" />
        <img src={FlagImage} alt="India flag" className="h-4 w-6 rounded cursor-pointer" />
        <img src={ProfileAvatar} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer object-cover" />
      </nav>
    </div>
  </header>
);

export default Header;