import React from 'react';
import AboutLeftGraphic from '../Images/about-left-graphic.svg'; 
import AboutRightGraphic from '../Images/about-right-graphic.svg'; 
import ArrowRightGraphic from '../Images/arrowright.svg';
import ArrowLeftGraphic from '../Images/arrowleft.svg';
const AboutHero = () => (
  <section className="relative py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-5xl">
      
      <img
        src={AboutLeftGraphic}
        alt="Creative Professionals Background Left"
        className="absolute top-0 left-0 object-contain opacity-100 pointer-events-none"
        style={{ width: '400px', height: 'auto', left: '-10px', top: '0px' }} 
      />
       <img
        src={ArrowLeftGraphic}
        alt="Creative Background Left"
        className="absolute bottom-0 left-0 object-contain opacity-100 pointer-events-none"
        style={{ width: '400px', height: 'auto', left: '-10px', bottom: '-100px' }} 
      />
      <img
        src={AboutRightGraphic}
        alt="Creative Professionals Background Right"
        className="absolute bottom-0 right-0 object-contain opacity-100 pointer-events-none"
        style={{ width: '350px', height: 'auto', right: '-10px', bottom: '100px' }} 
      />
       <img
        src={ArrowRightGraphic}
        alt="Creative Background Right"
        className="absolute top-0 right-0 object-contain opacity-100 pointer-events-none"
        style={{ width: '400px', height: 'auto', right: '-10px', top: '-100px' }} 
      />
      <div className="relative z-10 grid grid-cols-1 gap-12">
        
        <div className="space-y-12">
          
          <div className="pt-4 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">About NextStep</h2>
            <p 
              className="text-lg text-gray-600 mx-auto max-w-sm"
              style={{ textAlign: 'justify' }}
            >
              Welcome to NextStep, a vibrant community dedicated to helping junior professionals in the creative field find their dream jobs. Connect with employers, showcase your talents, and take the next step in your career journey with us. Join our network of talented individuals and innovative companies today.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Vision</h2>
            <p 
              className="text-lg text-gray-600 mx-auto max-w-sm"
              style={{ textAlign: 'justify' }} 
            >
              Our vision is to create unparalleled economic opportunities for every junior creative professional worldwide, empowering them to achieve their career goals and contribute significantly to the global workforce.
            </p>
          </div>
          
        </div>
        
        <div className="space-y-12">
          
          <div className="pt-4 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Mission</h2>
            <p 
              className="text-lg text-gray-600 mx-auto max-w-sm"
              style={{ textAlign: 'justify' }} 
            >
              Our mission is simple: to connect junior creative professionals with opportunities that inspire and enable them to grow, thrive, and succeed in their careers.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Who are we?</h2>
         
            <p 
              className="text-lg text-gray-600 mx-auto max-w-sm"
              style={{ textAlign: 'justify' }} 
            >
              NextStep started as an idea in 2025, born out of a desire to help junior creative professionals find meaningful job opportunities. Officially launched in 2025, NextStep has quickly grown into a dynamic platform connecting talented individuals with innovative companies, under visionary leadership. NextStep continues to expand, offering a range of services including job listings, career resources, and networking opportunities to support the next generation of creative professionals across the globe.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;