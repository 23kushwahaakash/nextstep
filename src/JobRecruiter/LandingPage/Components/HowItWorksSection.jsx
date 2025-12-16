import React from 'react';
import { Link } from 'react-router-dom';
const HowItWorksSection = () => {
  const steps = [
    { num: 1, title: 'Create Recruiter Account', description: 'Sign up and set up your company profile in minutes', iconColor: 'bg-green-500' },
    { num: 2, title: 'Post Your Job', description: 'Create detailed job listings with our easy-to-use form', iconColor: 'bg-green-500' },
    { num: 3, title: 'Review Applications', description: 'Browse qualified candidates and shortlist top talent', iconColor: 'bg-green-500' },
    { num: 4, title: 'Hire the Right Candidate', description: 'Connect with candidates and make your hire', iconColor: 'bg-green-500' },
  ];

  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Simple 4-step process to find your perfect hire
      </p>

      <div className="flex justify-center flex-wrap gap-12 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.num} className="w-48 relative">
            =
            <div className={`w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold ${step.iconColor}`}>
              {step.num}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
<Link to="/jobrecruiter/HomePage">
      <button className="mt-12 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-700 shadow-lg">
        Post A Job Now
      </button>
      </Link>
    </section>
  );
};

export default HowItWorksSection;