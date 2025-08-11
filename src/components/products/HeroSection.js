import React from 'react';

const HeroSection = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white pb-24 pt-40 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;