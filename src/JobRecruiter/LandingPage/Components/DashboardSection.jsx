import React from 'react';

import DashboardMockup from '../images/dashboard-mockup.svg';

const DashboardSection = () => (
  <section className="bg-gray-100 py-20 px-8 text-center">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Recruiter Dashboard
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Manage your entire recruitment process from one intuitive dashboard
      </p>
      
      <div className="bg-gray-900 p-4 rounded-xl shadow-2xl overflow-hidden">
        <img
          src={DashboardMockup}
          alt="Recruiter Dashboard Analytics"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  </section>
);

export default DashboardSection;