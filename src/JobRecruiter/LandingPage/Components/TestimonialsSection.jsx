import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "NextStep helped us hire faster than ever before. The analytics and filters are game-changers!", name: 'Aisha Reddy', title: 'Tech Innovations Ltd' },
    { quote: "The quality of candidates we found through NextStep is exceptional. Highly recommended for serious hiring.", name: 'Vikram Singh', title: 'Digital Solutions Inc' },
    { quote: "Managing multiple job postings has never been easier. The bulk posting feature saves us hours every week.", name: 'Meera Kapoor', title: 'StartUp Hub' },
  ];

  return (
    <section className="bg-white py-20 px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
        What Recruiters Say
      </h2>

      <div className="flex justify-center flex-wrap gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-sm text-left shadow-sm hover:shadow-lg transition duration-300">
            <p className="text-lg italic text-gray-700 mb-4">
              "{t.quote}"
            </p>
            <p className="font-bold text-gray-900">{t.name}</p>
            <p className="text-sm text-gray-500">{t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;