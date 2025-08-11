import React from 'react';

const HowLinearDamperWorks = ({ section }) => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        {section.title}
      </h2>
      <p>
        {section.intro}
      </p>
      <div className="flex mt-8">
        {/* Left column for text */}
        <div className="w-2/3 pr-8">
          <h3 className="text-xl font-bold text-[#34495e] mb-4">
            {section.energyAbsorption.title}
          </h3>
          <p className="mb-4">
            {section.energyAbsorption.desc1}
          </p>
          <p className="mb-8">
            {section.energyAbsorption.desc2}
          </p>
          <h3 className="text-xl font-bold text-[#34495e] mb-4">
            {section.keyComponents.title}
          </h3>
          <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
            {section.keyComponents.pistonAndRod.title}
          </h4>
          <p className="mb-4">
            {section.keyComponents.pistonAndRod.desc}
          </p>
          <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
            {section.keyComponents.hydraulicOil.title}
          </h4>
          <p className="mb-4">
            {section.keyComponents.hydraulicOil.desc1}
          </p>
          <p className="mb-4">
            {section.keyComponents.hydraulicOil.desc2}
          </p>
          <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
            {section.keyComponents.orifices.title}
          </h4>
          <p>
            {section.keyComponents.orifices.desc1}
          </p>
          <p>
            {section.keyComponents.orifices.desc2}
          </p>
        </div>
        {/* Right column for images */}
        <div className="w-1/3 flex flex-col space-y-4 mt-10 gap-10">
          <div>
            <img
              src="/images/products/how_lineardamper_work_1.png"
              alt={section.images.alt1}
              className="rounded-md"
            />
            <p className="text-center text-sm mt-2">{section.images.caption1}</p>
          </div>
          <div>
            <img
              src="/images/products/how_lineardamper_work_2.png"
              alt={section.images.alt2}
              className="rounded-md"
            />
            <p className="text-center text-sm mt-2">{section.images.caption2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLinearDamperWorks;