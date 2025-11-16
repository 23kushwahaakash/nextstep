
import React from 'react';
import './app.css'; 

import Header from './header';
import WelcomeBanner from './welcomebanner';
import CompanyCard from './companycard';
import AlertsSection from './alertsection';
import AnalyticsOverview from './analytics';
import JobPostingsTable from './jobposting';
import CompanyProfile from './companyprofile';
import ApplicantPipeline from './applicantpipeline';
import ApplicantTrends from './applicanttrends';
import TopJobsByApplicants from './topjobs';
import SavedTalentPool from './savedtalentpool';
import Footer from './footer';

function app() {
  
  const googlePost = {
    companyLogo: "Task-5/teamTask/src/JobGiver/Components/images/google.svg",
    companyName: "Google",
    postImage: "Task-5/teamTask/src/JobGiver/Components/images/unsplash-google.png",
    title: "Google's 2024 Hiring Trends",
    description: "Discover the key skills and roles Google is focusing on this year...",
    tags: ["Hiring", "Tech", "Future of Work"],
    isNewPost: true
  };

  const microsoftPost = {
    companyLogo: "Task-5/teamTask/src/JobGiver/Components/images/google.svg",
    companyName: "Microsoft",
    postImage: "Task-5/teamTask/src/JobGiver/Components/images/unsplash-microsoft.png",
    title: "Embracing Remote Work: Our Strategy",
    description: "How Microsoft is building a hybrid model that works for everyone...",
    tags: ["Remote Work", "Culture"],
    isNewPost: false
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        
        <div className="grid-item span-col-12">
          <WelcomeBanner />
        </div>

        <div className="grid-item span-col-6">
          <CompanyCard {...googlePost} />
        </div>
        <div className="grid-item span-col-6">
          <CompanyCard {...microsoftPost} />
        </div>
        
        <div className="grid-item span-col-12">
          <AlertsSection />
        </div>

        <div className="grid-item span-col-12">
          <AnalyticsOverview />
        </div>

        <div className="grid-item span-col-8">
          <JobPostingsTable />
        </div>
        <div className="grid-item span-col-4">
          <CompanyProfile />
        </div>

        <div className="grid-item span-col-12">
          <ApplicantPipeline />
        </div>

        <div className="grid-item span-col-8">
          <ApplicantTrends />
        </div>
        <div className="grid-item span-col-4">
          <TopJobsByApplicants />
        </div>

        
        <div className="grid-item span-col-12">
           <ApplicantTrends />
        </div>

        <div className="grid-item span-col-7">
          <TopJobsByApplicants />
        </div>
        <div className="grid-item span-col-5">
          <SavedTalentPool />
        </div>
        
      </main>
      

      <Footer />
    </div>
  );
}

export default app;