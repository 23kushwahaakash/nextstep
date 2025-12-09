import React from 'react';

import SarahImage from '../images/sarah-johnson.svg';
import RahulImage from '../images/rahul-sharma.svg';
import PriyaImage from '../images/priya-patel.svg';
import AmitImage from '../images/amit-kumar.svg';

const FeaturedTalentSection = () => {
  const candidates = [
    { name: 'Sarah Johnson', role: 'UI/UX Designer', location: 'Bangalore', experience: '5+ years', img: SarahImage },
    { name: 'Rahul Sharma', role: 'Full Stack Developer', location: 'Mumbai', experience: '7+ years', img: RahulImage },
    { name: 'Priya Patel', role: 'Product Manager', location: 'Pune', experience: '7+ years', img: PriyaImage },
    { name: 'Amit Kumar', role: 'Data Scientist', location: 'Hyderabad', experience: '4+ years', img: AmitImage },
  ];

  return (
    <section className="bg-white py-20 px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Featured Talent Pool
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Top verified candidates ready to join your team
      </p>

      <div className="flex justify-center flex-wrap gap-8 max-w-6xl mx-auto">
        {candidates.map((candidate) => (
          <div key={candidate.name} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 w-60 text-center">
            <img
              src={candidate.img}
              alt={candidate.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-bold text-gray-900">{candidate.name}</h4>
            <p className="text-sm font-semibold text-gray-700 mb-1">{candidate.role}</p>
            <p className="text-xs text-gray-500">{candidate.location} · {candidate.experience}</p>
            <button className="mt-4 w-full bg-gray-900 text-white text-sm py-2 rounded-lg hover:bg-gray-700 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTalentSection;