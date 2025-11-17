import React from 'react';
import './header.css';
import logoCompany from './images/logo.svg';
import searchIcon from './images/search.svg';
import HomeIcon from './images/home.svg';
import jobIcon from './images/pp.svg';
import messageIcon from './images/chat.svg';
import notificationIcon from './images/notification.svg';
import plusIcon from './images/plus.webp';
import locationIcon from './images/location.svg';
import userIcon from './images/pp.svg';
import downIcon from './images/down.svg';
const header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logoCompany} alt="NextStep Logo" />
        </div>
        <div className="search-bar">
          <img src={searchIcon} alt="Search Icon" className="icon" /> 
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <nav className="header-nav">
        <a href="#home" className="nav-item active">
          <img src={HomeIcon} alt="Home Icon" className="icon" />
          Home
        </a>
        <a href="#jobs" className="nav-item">
          <img src={jobIcon} alt="Jobs Icon" className="icon" /> 
          Jobs
        </a>
        <a href="#messages" className="nav-item">
          <img src={messageIcon} alt="Messages Icon" className="icon" /> 
          Messages
        </a>
        <a href="#notifications" className="nav-item">
          <img src={notificationIcon} alt="Notifications Icon" className="icon" /> 
          Notifications
        </a>
      </nav>
      <div className="header-right">
        <button className="btn-primary post-job-btn">
          <img src={plusIcon} alt="Plus Icon" className="icon" />
          Post a Job
        </button>
        <div className="location-selector">
          <img src={locationIcon} alt="Location Icon" className="icon" /> 
          <select>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
        </div>
        <div className="user-profile">
          <img src={userIcon} alt="User Avatar" className="user-avatar" /> 
          <img src={downIcon} alt="Dropdown Icon" className="icon dropdown-arrow" /> 
        </div>
      </div>
    </header>
  );
};

export default header;