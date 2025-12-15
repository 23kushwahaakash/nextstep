import React from 'react';
import './welcomebanner.css';

const welcomebanner = () => {
  return (
    <section className="welcome-banner dashboard-section">
      <div className="welcome-content">
        <h2>Welcome back, Mayank!</h2>
        <p>You have 3 new applicants to review today.</p>
      </div>
      <div className="welcome-image">
        <img src="/assets/welcome-illustration.png" alt="Welcome Illustration" /> 
      </div>
    </section>
  );
};

export default welcomebanner;