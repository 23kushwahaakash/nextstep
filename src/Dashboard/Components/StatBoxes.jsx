import React from 'react';

const StatBox = ({ title, count, bgColor }) => (
  <div className={`p-6 rounded-xl shadow-md ${bgColor} text-gray-900 w-full`}>
    <p className="text-gray-600 text-sm mb-2">{title}</p>
    <h3 className="text-yellow-500 text-4xl font-extrabold">{count}</h3>
  </div>
);

const StatBoxes = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    <StatBox title="Total Application" count="10" bgColor="bg-gray-100"/>
    <StatBox title="Pending" count="2" bgColor="bg-gray-100" />
    <StatBox title="Accepted" count="7" bgColor="bg-gray-100" />
    <StatBox title="Rejected" count="5" bgColor="bg-gray-100" />
  </div>
);

export default StatBoxes;