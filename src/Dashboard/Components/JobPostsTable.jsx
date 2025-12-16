import React from 'react';

const jobData = [
  { title: 'Senior Frontend Developer', company: 'Tech Corp', date: 'Nov 05, 2025' , status: 'Accepted'} ,
  { title: 'UX Designer', company: 'Tech Corp', date: 'Nov 05, 2025', status: 'Pending' },
  { title: 'Mern developer', company: 'Tech Corp', date: 'Nov 05, 2025' ,status: 'Rejected'},
  { title: 'Senior Frontend Developer', company: 'Tech Corp', date: 'Nov 05, 2025', status:'Pending' },
  { title: 'Full Stack', company: 'Tech Corp', date: 'Nov 05, 2025', status:'Accepted' },
];

const JobPostsTable = () => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">My Job Posts</h3>
    
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b text-gray-500 uppercase">
            <th className="py-3 px-2 md:px-4">Total Application</th>
            <th className="py-3 px-2 md:px-4">Company</th>
            <th className="py-3 px-2 md:px-4">Date Applied</th>
            <th className="py-3 px-2 md:px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-2 md:px-4 font-medium">{job.title}</td>
              <td className="py-3 px-2 md:px-4">{job.company}</td>
              <td className="py-3 px-2 md:px-4 text-gray-600 whitespace-nowrap">{job.date}</td>
              <td className="py-3 px-2 md:px-4">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default JobPostsTable;