import React from 'react';
import Image from 'next/image'

const WhatIsLinearDamper = ({ section, whyChoose, table }) => {
  return (
    <section className="bg-white p-10 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        {section.title}
      </h2>
      <p className="mb-4">
        {section.description1}
      </p>
      <p className="mb-8">
        {section.description2}
      </p>
      <p className="mb-8">
        {section.description3}
      </p>

      {/* Why part */}
      <h3 className="text-xl font-bold text-[#34495e] mb-4">
        {whyChoose.title}
      </h3>
      <p className="mb-8">
        {whyChoose.description}
      </p>
      <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              {table.headers.dampingType}
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              {table.headers.energyAbsorption}
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              {table.headers.reboundRisk}
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              {table.headers.performance}
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              {table.headers.applications}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b">
              <strong>{table.hydraulic.type}</strong>
            </td>
            <td className="p-4 border-b">
              {table.hydraulic.energyAbsorption}
            </td>
            <td className="p-4 border-b">
              {table.hydraulic.reboundRisk}
            </td>
            <td className="p-4 border-b">
              {table.hydraulic.performance}
            </td>
            <td className="p-4 border-b">
              {table.hydraulic.applications}
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">{table.rubber.type}</td>
            <td className="p-4 border-b">
              {table.rubber.energyAbsorption}
            </td>
            <td className="p-4 border-b">
              {table.rubber.reboundRisk}
            </td>
            <td className="p-4 border-b">
              {table.rubber.performance}
            </td>
            <td className="p-4 border-b">
              {table.rubber.applications}
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">{table.spring.type}</td>
            <td className="p-4 border-b">
              {table.spring.energyAbsorption}
            </td>
            <td className="p-4 border-b">
              {table.spring.reboundRisk}
            </td>
            <td className="p-4 border-b">
              {table.spring.performance}
            </td>
            <td className="p-4 border-b">
              {table.spring.applications}
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">{table.pneumatic.type}</td>
            <td className="p-4 border-b">
              {table.pneumatic.energyAbsorption}
            </td>
            <td className="p-4 border-b">
              {table.pneumatic.reboundRisk}
            </td>
            <td className="p-4 border-b">
              {table.pneumatic.performance}
            </td>
            <td className="p-4 border-b">
              {table.pneumatic.applications}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default WhatIsLinearDamper;