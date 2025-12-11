import React from 'react';

const CompanyProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Company Profile</h2>
        <button className="text-sm text-blue-600 hover:text-blue-900 font-semibold">Edit Profile</button>
      </div>
      
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">G</div>
        <div>
          <p className="text-lg font-semibold text-gray-900">Google</p>
          <p className="text-sm text-gray-600">Technology & Software</p>
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600 border-b pb-4 mb-4">
        <p className="flex items-center">
          <span className="mr-2 text-lg">🏢</span> 500-1000 employees
        </p>
        <p className="flex items-center">
          <span className="mr-2 text-lg">📍</span> San Francisco, CA
        </p>
        <p className="flex items-center">
          <span className="mr-2 text-lg">🌐</span> www.google.com
        </p>
      </div>
      
      <div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
            <p>Profile Completeness</p>
            <p className="font-semibold">75%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Add company benefits to reach 100%</p>
      </div>
    </div>
  );
};

export default CompanyProfile