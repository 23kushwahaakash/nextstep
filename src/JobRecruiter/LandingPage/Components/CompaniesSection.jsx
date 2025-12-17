import React from 'react';
import FlipkartLogo from '../Images/flipkart.svg';
import ZomatoLogo from '../Images/zomato.svg';
import TcsLogo from '../Images/tcs.svg';
import MicrosoftLogo from '../Images/microsoft.svg';

const CompaniesSection = () => {
  const logos = [
    { src: FlipkartLogo, alt: 'Flipkart' },
    { src: ZomatoLogo, alt: 'Zomato' },
    { src: TcsLogo, alt: 'TCS' },
    { src: MicrosoftLogo, alt: 'Microsoft' },
  ];

  return (
    <section className="bg-white py-10 px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        Top Companies Hiring on NextStep
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-12">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
