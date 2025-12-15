import React from 'react';
import './jobposting.css';
import searchIcon from './images/search.svg';
import viewIcon from './images/apeye.svg';
import actionIcon from './images/apdots.svg';
const jobposting = () => {
  const jobPostings = [
    { title: "Senior Frontend Developer", datePosted: "Oct 26, 2023", status: "Active", applicants: 154 },
    { title: "Product Manager", datePosted: "Oct 20, 2023", status: "Active", applicants: 110 },
    { title: "UX Designer", datePosted: "Oct 15, 2023", status: "Active", applicants: 98 },
    { title: "Marketing Specialist", datePosted: "Sep 28, 2023", status: "Active", applicants: 67 },
  ];

  return (
    <div className="job-postings-table card">
      <div className="table-header flex-between mb-3">
        <h3>Job Postings</h3>
        <div className="header-actions">
          <button className="btn-ghost mr-2">
            <img src={searchIcon} alt="Search" className="icon" /> 
          </button>
          <button className="btn-ghost">
            <img src="/assets/icon-filter.png" alt="Filter" className="icon" /> 
          </button>
        </div>
      </div>

      <table className="job-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Date Posted</th>
            <th>Status</th>
            <th>Applicants</th>
            <th>View</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobPostings.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.datePosted}</td>
              <td><span className="badge badge-success">{job.status}</span></td> 
              <td>{job.applicants}</td>
              <td><button className="btn-ghost"><img src={viewIcon}alt="View" className="icon" /></button></td> 
              <td><button className="btn-ghost"><img src={actionIcon} alt="Actions" className="icon" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default jobposting;