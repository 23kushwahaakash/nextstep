import React from 'react';
import './analytics.css';
import activeIcon from './images/bag.svg';
import newIcon from './images/apcontact.svg';
import calendarIcon from './images/apcalendar.svg';
import warningIcon from './images/warning.svg';
const analytics = () => {
  const metrics = [
    { label: "Active Job Posts", value: 3, icon: activeIcon },
    { label: "Total Applicants", value: 453, icon: newIcon },
    { label: "Interviews Scheduled", value: 7, icon: calendarIcon },
    { label: "Expiring Soon", value: 2, icon: warningIcon },
  ];

  return (
    <section className="analytics-overview dashboard-section">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card card">
            <div className="flex-between mb-1">
              <span className="metric-label">{metric.label}</span>
              <img src={metric.icon} alt={`${metric.label} Icon`} className="icon" /> 
            </div>
            <p className="metric-value">{metric.value}</p>
            <span className="metric-period">this week</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default analytics;