import React from 'react';
import Header from '../../LandingPage/Components/Header'; 
import Footer from '../../LandingPage/Components/Footer';
import Sidebar from '../../JobRecruiter/DashboardPage/Components/Sidebar';
import StatBoxes from '../../JobRecruiter/DashboardPage/Components/StatBoxes';
import JobPostsTable from '../../JobRecruiter/DashboardPage/Components/JobPostsTable';

const DashboardPage = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Header />
      
      <div className="flex pt-5 flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 ml-0 lg:ml-64 transition-all duration-300 overflow-y-auto">
          
          <main className="p-4 md:p-10 flex-1"> 
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Welcome Back, Mayank!</h1>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Here's a summary of your job application activity.
              </p>

              <StatBoxes />
              <JobPostsTable />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;