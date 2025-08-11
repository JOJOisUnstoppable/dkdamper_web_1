import React from 'react';
import LineChartWithShadows from '../common/LineChartWithShadows';

const LinearDamperTypes = ({ section }) => {
  const demoData = {
    title: section.chart.title,
    xLabels: [0,1,2,3,4,5,6,7,8,9,10],
    dataSets: [
      {
        label: section.chart.dataSets.singleHoleOverflow,
        data: [0, 24, 20, 16, 15, 14, 13, 12, 11, 10, 0],
        borderColor: '#3b82f6' // 蓝色
      },
      {
        label: section.chart.dataSets.multiHoleOverflow,
        data: [0, 12, 11.5, 11, 10.6, 10.2, 10.6, 11, 11.5, 12, 0],
        borderColor: '#10b981' // 绿色
      },
      {
        label: section.chart.dataSets.grooveOverflow,
        data: [0, 10, 11, 12, 13, 14, 15, 16, 24, 29, 0],
        borderColor: '#f59e0b' // 橙色
      }
    ],
    yStepSize: 30,
    height: 450
  };

  return (
    <section className="bg-white p-12 rounded-lg shadow-md shadow-xl my-16 mx-40">
      <h2 className="text-5xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        {section.mainTitle}
      </h2>
      <p>
        {section.intro}
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        {section.constantOrificeTypes.title}
      </h3>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        {section.constantOrificeTypes.singleOrificeType.title}
      </h4>
      <p>
        {section.constantOrificeTypes.singleOrificeType.description}
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        {section.strokeDependentOrificeTypes.title}
      </h3>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        {section.strokeDependentOrificeTypes.multipleOrificeType.title}
      </h4>
      <p>
        {section.strokeDependentOrificeTypes.multipleOrificeType.description}
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        {section.strokeDependentOrificeTypes.multipleVaryingOrificeType.title}
      </h4>
      <p>
        {section.strokeDependentOrificeTypes.multipleVaryingOrificeType.description}
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        {section.strokeDependentOrificeTypes.grooveOrificeType.title}
      </h4>
      <p>
        {section.strokeDependentOrificeTypes.grooveOrificeType.description}
      </p>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <LineChartWithShadows
          title={demoData.title}
          xLabels={demoData.xLabels}
          dataSets={demoData.dataSets}
          yStepSize={demoData.yStepSize}
          height={demoData.height}
        />
      </div>
    </section>
  );
};

export default LinearDamperTypes;