import React from 'react';
import Header from '../../../LandingPage/Components/Header';
import KeyStats from '../Components/KeyStats';
import JobPostingsTable from '../Components/JobPostingsTable';
import CompanyProfile from '../Components/CompanyProfile';
import ApplicantPipeline from '../Components/ApplicantPipeline';
import DashboardAnalytics from '../Components/DashboardAnalytics';
import SavedTalentPool from '../Components/SavedTalentPool';
import Footer from '../../../LandingPage/Components/Footer';
import AddPost from '../Components/AddPost';
import Companies from '../Components/Companies';

const JRHomePage = () => {
  return (
    <div className='bg-[#F1F5FA] min-h-screen'>
      <Header/>
      <div className='bg-white w-full md:w-[95%] shadow-lg pt-[20%] md:pt-[6%] mx-auto flex flex-col items-center overflow-x-hidden'>
          <AddPost />
          <Companies/>
        
          <div className="bg-white w-full">
            <div className="p-4 md:p-10 max-w-7xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Welcome back, Mayank!</h1>
              <p className="text-gray-600 mb-6">Here's what's happening with your job postings today.</p>

        <div className="space-y-4 mb-8">
        <div className="p-4 bg-blue-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">                <p className="text-blue-800">👤 You have 12 new applicants this week</p>
                <button className="text-sm font-semibold text-blue-800 hover:text-blue-950">Review Applicants</button>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">                <p className="text-yellow-800">ⓘ Your Frontend Developer job post is expiring in 2 days</p>
                <button className="text-sm font-semibold text-yellow-800 hover:text-yellow-950">Extend Post</button>
            </div>
            <div className="p-4 bg-green-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">                <p className="text-green-800">📈 Your job posts received 45% more views this week</p>
                <button className="text-sm font-semibold text-green-800 hover:text-green-950">View Analytics</button>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">                <p className="text-purple-800">💡 Based on your recent postings, here are 5 suggested candidates</p>
                <button className="text-sm font-semibold text-purple-800 hover:text-purple-950">View Suggestions</button>
            </div>
        </div>

        <KeyStats />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2 overflow-x-auto">
                      <JobPostingsTable />
                  </div>
                  <div className="lg:col-span-1">
                      <CompanyProfile />
                  </div>
              </div>
              
              <ApplicantPipeline />
              <DashboardAnalytics />
              <SavedTalentPool />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default JRHomePage;