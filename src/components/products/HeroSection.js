import React from 'react';

const HeroSection = ({ title, description1, description2 }) => {
  return (
    <section className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white pb-24 pt-40 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-2 mx-auto max-w-6xl ">{description1}</p>
        <p className="text-lg mb-2 mx-auto">{description2}</p>

      </div>
    </section>
  );
};

export default HeroSection;