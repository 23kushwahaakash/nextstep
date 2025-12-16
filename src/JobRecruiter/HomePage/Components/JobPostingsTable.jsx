import React from 'react';

const jobPostings = [
  { title: "Senior Frontend Developer", date: "Nov 5, 2025", status: "Active", applicants: 45, views: 234, statusClass: "bg-green-100 text-green-800" },
  { title: "UX/UI Designer", date: "Nov 3, 2025", status: "Active", applicants: 32, views: 189, statusClass: "bg-green-100 text-green-800" },
  { title: "Backend Engineer", date: "Nov 1, 2025", status: "Active", applicants: 28, views: 156, statusClass: "bg-green-100 text-green-800" },
  { title: "Product Manager", date: "Oct 28, 2025", status: "Paused", applicants: 67, views: 412, statusClass: "bg-yellow-100 text-yellow-800" },
  { title: "DevOps Engineer", date: "Oct 25, 2025", status: "Active", applicants: 19, views: 98, statusClass: "bg-green-100 text-green-800" },
  { title: "Marketing Specialist", date: "Oct 20, 2025", status: "Closed", applicants: 53, views: 287, statusClass: "bg-gray-100 text-gray-800" },
];

const JobPostingsTable = () => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Job Postings</h2>
      <input 
        type="text" 
        placeholder="Search jobs..." 
        className="w-full sm:w-64 p-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:outline-none"
      />
    </div>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicants</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobPostings.map((job, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
              <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-500">{job.date}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${job.statusClass}`}>
                  {job.status}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{job.applicants}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-900 text-xl">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default JobPostingsTable;