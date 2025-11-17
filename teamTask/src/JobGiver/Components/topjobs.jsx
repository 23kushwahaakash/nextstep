import React from 'react';
import './topjobs.css';
import topIcon from './images/icon.svg';
const topjobs = () => {
  return (
    <div className="top-jobs-by-applicants card">
      <h3 className="mb-3">Top Job Postings by Applicants</h3>
      <div className="top-jobs-chart">
        <img src={topIcon} alt="Top Jobs Bar Chart" /> 
      </div>
    </div>
  );
};

export default topjobs;