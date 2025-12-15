import React from 'react';
import './companyprofile.css';
import tipIcon from './images/Primitive.div.svg';
const companyprofile = () => {
  const completeness = 85; 

  return (
    <div className="company-profile card">
      <div className="profile-header flex-between mb-3">
        <h3>Company Profile</h3>
        <button className="btn-ghost">Edit Profile <img src="/assets/icon-edit.png" alt="Edit" className="icon" /></button> 
      </div>
      <div className="profile-completeness-bar">
        <div className="progress-bar" style={{ width: `${completeness}%` }}></div>
      </div>
      <p className="completeness-text">{completeness}% profile completeness</p>
      <div className="profile-tip flex-center">
        <img src={tipIcon} alt="Tip" className="icon mr-1" />
        <span>Complete your profile to attract more applicants</span>
      </div>
    </div>
  );
};

export default companyprofile;