import React from 'react';
import Header from '../Components/Header'; 
import Footer from '../Components/Footer';

import Sidebar from '../Components/Sidebar';

import StatBoxes from '../Components/StatBoxes';
import JobPostsTable from '../Components/JobPostsTable';


const JRDashboardPage = () => {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Sidebar />

      <main className="ml-64 pt-20 p-6"> 
        
        <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
        <p className="text-gray-600 mb-8">Here's a summary of your job recruitment activity.</p>

        <StatBoxes />

        <JobPostsTable />
        
        
      </main>

      <div className="ml-64">
        <Footer />
      </div>
    </div>
  );
};

export default JRDashboardPage