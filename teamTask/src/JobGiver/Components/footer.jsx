import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} NextStep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;