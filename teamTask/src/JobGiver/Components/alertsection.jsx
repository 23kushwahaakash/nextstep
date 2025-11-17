import React from 'react';
import './alertsection.css';
import infoIcon from './images/apcontact.svg';
import warningIcon from './images/warning.svg';
import suggestionIcon from './images/bulb.svg';
const alertsection = () => {
  return (
    <section className="alerts-section dashboard-section">
      <div className="alert-card info-alert card">
        <img src={infoIcon} alt="Info Icon" className="icon mr-1" /> 
        <span>You have 12 new applicants this week</span>
        <button className="btn-ghost">Review Applicants</button> 
      </div>
      <div className="alert-card warning-alert card">
        <img src={warningIcon} alt="Warning Icon" className="icon mr-1" /> 
        <span>Your Frontend Developer job post is expiring in 2 days</span>
        <button className="btn-ghost">Extend Post </button> 
      </div>
      <div className="alert-card suggestion-alert card">
        <img src={suggestionIcon} alt="Suggestion Icon" className="icon mr-1" /> 
        <span>Based on your recent postings, here are 3 suggested candidates</span>
        <button className="btn-ghost">View Suggestions </button> 
      </div>
      
    </section>
  );
};

export default alertsection;