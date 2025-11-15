
import React from 'react';
import './footer.css';
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>NextStep</h3>
          <p>Your partner in finding the right talent.</p>
          <div className="social-icons">
            <a href="#facebook">FB</a>
            <a href="#twitter">TW</a>
            <a href="#linkedin">LI</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: info@nextstep.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-column newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NextStep. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default footer; 