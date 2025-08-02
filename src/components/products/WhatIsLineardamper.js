import React from 'react';
import Image from 'next/image'

const WhatIsLinearDamper = () => {
  return (
    <section className="bg-white p-10 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        What is a Linear Damper?
      </h2>
      <p className="mb-4">
        Linear dampers are essential components used to control motion by providing resistance through the compression of hydraulic oil and the flow through orifices. They are widely applied in various industries for buffering and decelerating movements, ensuring smooth and controlled operations.
      </p>
      <p className="mb-8">
       Linear dampers provide a smooth linear damping motion and are available with an integrated light switch on request. They dampen the closing or opening process in one direction, while providing a free run (no resistance) in the other.
      </p>
      <p className="mb-8">
       Linear dampers,in simple tems. are a tvpe of device used to control the speed of moving obiects, alowing them to decelerate gradually and avoid sudden stops or impacts. You can see their applications in many places,such as Mini Linear Damper in trash can cabinet doors and oil/gas damper that allow car trunks close slowly and gently that don't slam shut.
      </p>
       {/* 横向排列的图片 */}

       {/* Why part */}
      <h3 className="text-xl font-bold text-[#34495e] mb-4">
        Why Choose Hydraulic Linear Dampers?
      </h3>
      <p className="mb-8">
        Hydraulic linear dampers offer superior performance compared to other damping technologies:
      </p>
      <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              Damping Type
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              Energy Absorption
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              Rebound Risk
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              Performance
            </th>
            <th className="bg-[#3498db] text-white font-bold p-4 text-left">
              Applications
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b">
              <strong>Hydraulic (Our Technology)</strong>
            </td>
            <td className="p-4 border-b">
              Converts kinetic energy to heat energy
            </td>
            <td className="p-4 border-b">
              Minimal - energy dissipated
            </td>
            <td className="p-4 border-b">
              Excellent - customizable characteristics
            </td>
            <td className="p-4 border-b">
              Industrial, precision applications
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">Rubber</td>
            <td className="p-4 border-b">
              Elastic deformation stores energy
            </td>
            <td className="p-4 border-b">
              High - stored energy creates rebound
            </td>
            <td className="p-4 border-b">
              Basic - limited control
            </td>
            <td className="p-4 border-b">
              Simple, low-cost applications
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">Spring</td>
            <td className="p-4 border-b">
              Elastic deformation stores energy
            </td>
            <td className="p-4 border-b">
              High - stored energy creates rebound
            </td>
            <td className="p-4 border-b">
              Basic - limited control
            </td>
            <td className="p-4 border-b">
              Simple mechanical systems
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b">Pneumatic</td>
            <td className="p-4 border-b">
              Compressed air through orifice
            </td>
            <td className="p-4 border-b">
              Medium - depends on balance
            </td>
            <td className="p-4 border-b">
              Good - but less precise
            </td>
            <td className="p-4 border-b">
              Medium-duty applications
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default WhatIsLinearDamper;