// src/components/HeroSection.js
import React from 'react';
import Image from 'next/image';

const HeroSection = ({ title, gradientFrom, gradientTo }) => {
  return (
    <section className="relative py-32 bg-white">
      <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom}/10 to-${gradientTo}/10`} />
      <div className="max-w-[1200px] mx-auto px-4 relative">
        <div className="ml-20">
          <h1 className="text-7xl font-bold mb-6">{title}</h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} mb-8`} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;