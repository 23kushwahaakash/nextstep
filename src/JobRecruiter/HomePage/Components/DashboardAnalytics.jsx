import React from 'react';
import TrendsChartImage from '../Images/TrendsChart.svg';
import TopJobsChartImage from '../Images/TopJobsChart.svg';
const DashboardAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 -mx-6 md:-mx-10 mt-8 mb-8">
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Application Trends</h2>
        
        <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg p-4">
             <img 
                 src={TrendsChartImage}
                 alt="Application Trends Line Chart" 
                 className="w-full h-full object-contain"
             />
        </div>
        
        <div className="flex justify-center space-x-6 text-sm mt-4">
            <div className="flex items-center text-blue-500">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Applications
            </div>
            <div className="flex items-center text-purple-500">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span> Views
            </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Job Posts by Applicants</h2>
        
        <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg p-4">
             <img 
                 src={TopJobsChartImage} 
                 alt="Top Job Posts Bar Chart" 
                 className="w-full h-full object-contain"
             />
        </div>
      </div>
      
    </div>
  );
};

export default DashboardAnalytics;