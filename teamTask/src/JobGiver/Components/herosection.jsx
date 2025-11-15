import React from 'react';
import './herosection.css'; 

const herosection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/path/to/your/hero-background.jpg" alt="Talent silhouettes" />
      </div>
      <div className="hero-content">
        <h1>Hire the Right Talent Faster!</h1>
        <p>Find your next star employee with our advanced matching technology.</p>
        <div className="hero-buttons">
          <button className="primary-button">Get Started Now</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default herosection; 