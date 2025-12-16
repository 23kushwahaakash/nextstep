import React from 'react';
import TrendsChartImage from '../Images/TrendsChart.svg';
import TopJobsChartImage from '../Images/TopJobsChart.svg';

const DashboardAnalytics = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Application Trends</h2>
      <div className="h-48 md:h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
           <img src={TrendsChartImage} alt="Trends" className="w-full h-full object-contain p-2" />
      </div>
      <div className="flex justify-center space-x-6 text-xs md:text-sm mt-4">
          <div className="flex items-center text-blue-500">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Applications
          </div>
          <div className="flex items-center text-purple-500">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span> Views
          </div>
      </div>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Job Posts</h2>
      <div className="h-48 md:h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
           <img src={TopJobsChartImage} alt="Top Jobs" className="w-full h-full object-contain p-2" />
      </div>
    </div>
  </div>
);

export default DashboardAnalytics;