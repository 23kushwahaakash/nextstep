import React from 'react';
import './applicantpipeline.css';
import newIcon from './images/apcontact.svg';
import reviewIcon from './images/apeye.svg';
import interviewIcon from './images/apcalendar.svg';
import hiredIcon from './images/apdots.svg';
import messageIcon from './images/apmsg.svg';
const applicantpipeline = () => {
  const pipelineStages = [
    { label: "New Applicants", count: 2, icon: newIcon, type: "new" },
    { label: "In Review", count: 5, icon: reviewIcon, type: "review" },
    { label: "Interviews Scheduled", count: 3, icon: interviewIcon, type: "interview" },
    { label: "Hired", count: 1, icon: hiredIcon, type: "hired" },
    { label: "Messages", count: 12, icon: messageIcon, type: "message" },
  ];

  return (
    <div className="applicant-pipeline card">
      <h3 className="mb-3">Applicant Pipeline</h3>
      <div className="pipeline-grid">
        {pipelineStages.map((stage, index) => (
          <div key={index} className={`pipeline-stage ${stage.type}`}>
            <div className="stage-header flex-between mb-1">
              <span className="stage-label">{stage.label}</span>
              <img src={stage.icon} alt={`${stage.label} Icon`} className="icon" /> 
            </div>
            <p className="stage-count">{stage.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default applicantpipeline;