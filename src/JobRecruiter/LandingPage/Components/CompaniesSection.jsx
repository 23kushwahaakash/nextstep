import React from 'react';
import FlipkartLogo from '../images/flipkart.svg';
import ZomatoLogo from '../images/zomato.svg';
import TcsLogo from '../images/tcs.svg';
import MicrosoftLogo from '../images/microsoft.svg';

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
            className="h-10 w-auto opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;