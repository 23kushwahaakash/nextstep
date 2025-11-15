
import React from 'react';
import './header.css'; 

const header = () => {
  return (
    <header className="header">
      
      <div className="logo">
        <img src="Task-5/logo.svg" alt="NextStep Logo" /> 
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
};

export default header;