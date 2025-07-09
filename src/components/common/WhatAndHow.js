// src/components/WhatIsAndHowItWorks.js
import React from 'react';

const WhatIsAndHowItWorks = ({ sectionTitle, descriptions }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">{sectionTitle}</h2>
            <div className="text-left">
              {descriptions.map((description, index) => (
                <p key={index} className="text-xl text-gray-600 mt-4">
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAndHowItWorks;