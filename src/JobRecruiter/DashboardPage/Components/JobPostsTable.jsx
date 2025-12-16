import React from 'react';

const jobData = [
  { title: 'Senior Frontend Developer', applicants: 15, date: 'Nov 05, 2025' },
  { title: 'UX Designer', applicants: 45, date: 'Nov 05, 2025' },
  { title: 'Mern developer', applicants: 20, date: 'Nov 05, 2025' },
  { title: 'Senior Frontend Developer', applicants: 67, date: 'Nov 05, 2025' },
  { title: 'Full Stack', applicants: 23, date: 'Nov 05, 2025' },
];

const JobPostsTable = () => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">My Job Posts</h3>
    
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b text-gray-500 uppercase">
            <th className="py-3 px-2 md:px-4">Job Title</th>
            <th className="py-3 px-2 md:px-4">Applicants</th>
            <th className="py-3 px-2 md:px-4">Date Posted</th>
            <th className="py-3 px-2 md:px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-2 md:px-4 font-medium">{job.title}</td>
              <td className="py-3 px-2 md:px-4">{job.applicants}</td>
              <td className="py-3 px-2 md:px-4 text-gray-600 whitespace-nowrap">{job.date}</td>
              <td className="py-3 px-2 md:px-4 text-right space-x-1 md:space-x-3 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm">View</button>
                <button className="text-green-600 hover:text-green-800 text-xs md:text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-xs md:text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default JobPostsTable;