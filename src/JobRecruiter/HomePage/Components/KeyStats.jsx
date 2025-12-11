import React from 'react';

const statsData = [
  { title: "Active Job Posts", value: "12", change: "+2 this week", color: "text-purple-500", icon: "🗓️" },
  { title: "Total Applicants", value: "348", change: "+45 this week", color: "text-green-500", icon: "👥" },
  { title: "Interviews Scheduled", value: "8", change: "3 this week", color: "text-purple-500", icon: "📆" },
  { title: "Expiring Soon", value: "3", change: "Within 7 days", color: "text-yellow-500", icon: "🚨" },
];

const KeyStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statsData.map((stat) => (
        <div key={stat.title} className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm text-gray-500">{stat.title}</p>
            <span className={`text-xl ${stat.color}`}>{stat.icon}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className={`text-sm ${stat.title === 'Total Applicants' ? 'text-green-500' : 'text-gray-500'}`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KeyStats