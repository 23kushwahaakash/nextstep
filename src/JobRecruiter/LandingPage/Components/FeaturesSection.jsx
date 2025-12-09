import React from 'react';
import AiMatchingIcon from '../images/ai-matching.svg';
import VerifiedIcon from '../images/verified.svg';
import AnalyticsIcon from '../images/analytics.svg';
import BulkPostIcon from '../images/bulk-post.svg';
import CollaborationIcon from '../images/collaboration.svg';
import BrandingIcon from '../images/branding.svg';


const FeatureCard = ({ icon, title, description, iconBg }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
    <div className={`p-3 rounded-xl inline-block mb-4 ${iconBg}`}>
      <img src={icon} alt={title} className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => (
  <section className="bg-gray-50 py-20 px-8">
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
        Why Recruit on NextStep?
      </h2>
      <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
        Streamline your hiring process with powerful tools designed to connect you with top talent efficiently
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCard
          icon={AiMatchingIcon}
          title="AI-Powered Matching"
          description="Get instant matches for your job openings with our intelligent candidate recommendation system."
          iconBg="bg-violet-100"
        />
        <FeatureCard
          icon={VerifiedIcon}
          title="Verified Job Seekers"
          description="Access a pool of verified and skilled professionals ready to join your team."
          iconBg="bg-green-100"
        />
        <FeatureCard
          icon={AnalyticsIcon}
          title="Analytics Dashboard"
          description="Track views, applications, and hiring performance with real-time insights."
          iconBg="bg-orange-100"
        />
        <FeatureCard
          icon={BulkPostIcon}
          title="Bulk Job Posting"
          description="Post multiple jobs easily and manage all your postings from one central hub."
          iconBg="bg-gray-200"
        />
        <FeatureCard
          icon={CollaborationIcon}
          title="Collaboration Tools"
          description="Add hiring team members to manage recruiters together seamlessly."
          iconBg="bg-amber-100"
        />
        <FeatureCard
          icon={BrandingIcon}
          title="Employer Branding"
          description="Build and showcase your company culture to attract the best talent."
          iconBg="bg-teal-100"
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;