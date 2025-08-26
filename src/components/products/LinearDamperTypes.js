import React from 'react';
import LineChartWithShadows from '../common/LineChartWithShadows';

const LinearDamperTypes = ({ section }) => {
  const demoData = {
    title: section.chart.title,
    xLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    dataSet1: [
      {
        label: section.chart.dataSets.singleHoleOverflow,
        data: [0, 24, 20, 16, 15, 14, 13, 12, 11, 10, 0],
        borderColor: '#3b82f6' // 蓝色
      },
    ],
    dataSet2: [
      {
        label: section.chart.dataSets.multiHoleOverflow,
        data: [0, 12, 11.5, 11, 10.6, 10.2, 10.6, 11, 11.5, 12, 0],
        borderColor: '#10b981' // 绿色
      },
    ],
    dataSet3: [
      {
        label: section.chart.dataSets.MultipleVaryingOrificeType,
        data: [0, 10, 11, 12, 13, 14, 15, 16, 24, 29, 0],
        borderColor: '#f59e0b' // 橙色
      }
    ],
    dataSet4: [
      {
        label: section.chart.dataSets.grooveOverflow,
        data: [0, 10, 10.5, 11, 11.2, 11.8, 11.2, 11, 10.5, 10, 0],
        borderColor: '#a78bfa' // 浅紫色
      }
    ],
    yStepSize: 30,
    height: 300
  };

  return (
    <section className="bg-white p-12 rounded-lg shadow-md shadow-xl my-16 mx-40">
      <h2 className="text-5xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        {section.mainTitle}
      </h2>
      <p>
        {section.intro}
      </p>

      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.SOT.title}
          </h3>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.SOT.StructuralFeatures.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.SOT.StructuralFeatures.list.map((feature, index) => {
              const isSubItem = index === 1 || index === 2 || index === 3;
              return (
                <li key={index} className={isSubItem ? "ml-6 list-[circle]" : ""}>
                  {feature}
                </li>
              );
            })}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.SOT.DPC.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.SOT.DPC.list.map((feature, index) => {
              const isSubItem = index === 1 || index === 2;
              return (
                <li key={index} className={isSubItem ? "ml-6 list-[circle]" : ""}>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container mx-auto px-4 pt-20 max-w-2xl">
          <LineChartWithShadows
            title={section.DamperTypesDiff.SOT.title}
            xLabels={demoData.xLabels}
            dataSets={demoData.dataSet1}
            yStepSize={demoData.yStepSize}
            height={demoData.height}
          />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MOt.title}
          </h3>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MOt.StructuralFeatures.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MOt.StructuralFeatures.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MOt.KeyAspects.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MOt.KeyAspects.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MOt.DPC.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MOt.DPC.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto px-4 pt-20 max-w-2xl">
          <LineChartWithShadows
            title={section.DamperTypesDiff.MOt.title}
            xLabels={demoData.xLabels}
            dataSets={demoData.dataSet2}
            yStepSize={demoData.yStepSize}
            height={demoData.height}
          />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MVOT.title}
          </h3>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MVOT.StructuralFeatures.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MVOT.StructuralFeatures.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MVOT.KeyHighlights.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MVOT.KeyHighlights.list.map((feature, index) => {
              const isSubItem = index === 2 || index === 3;
              return (
                <li key={index} className={isSubItem ? "ml-6 list-[circle]" : ""}>
                  {feature}
                </li>
              );
            })}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.MVOT.DampingPerformanceCharacteristics.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.MVOT.DampingPerformanceCharacteristics.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto px-4 pt-20 max-w-2xl">
          <LineChartWithShadows
            title={section.DamperTypesDiff.MOt.title}
            xLabels={demoData.xLabels}
            dataSets={demoData.dataSet3}
            yStepSize={demoData.yStepSize}
            height={demoData.height}
          />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.GOT.title}
          </h3>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.GOT.StructuralFeatures.title}
          </h4>
          <p>
            {section.DamperTypesDiff.GOT.StructuralFeatures.desc}
          </p>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.GOT.KeyAspects.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.GOT.KeyAspects.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
            {section.DamperTypesDiff.GOT.DPC.title}
          </h4>
          <ul className="list-disc pl-6">
            {section.DamperTypesDiff.GOT.DPC.list.map((feature, index) => {
              const isSubItem = index === 1 || index === 2 || index === 3;
              return (
                <li key={index} className={isSubItem ? "ml-6 list-[circle]" : ""}>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container mx-auto px-4 pt-20 max-w-2xl">
          <LineChartWithShadows
            title={section.DamperTypesDiff.MOt.title}
            xLabels={demoData.xLabels}
            dataSets={demoData.dataSet4}
            yStepSize={demoData.yStepSize}
            height={demoData.height}
          />
        </div>
      </div>
    </section>
  );
};

export default LinearDamperTypes;