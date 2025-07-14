import React from 'react';

const LinearDamperTypes = () => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-md shadow-xl my-16 mx-40">
      <h2 className="text-5xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        Dampering Curve are various for applications
      </h2>
      <p>
        Linear dampers are divided into categories based on how the orifice area changes during operation, providing different absorption characteristics for various applications.
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        Constant Orifice Types
      </h3>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        Single-Orifice Type
      </h4>
      <p>
        Features three structural variations: dashpot structure utilizing space between piston and cylinder tube, single tube structure with orifices in the piston, and double tube single orifice structure (adjustable). Throughout the entire stroke, the orifice area remains constant. Resistance spikes immediately after impact, then decreases as stroke advances and speed decreases.
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        Stroke-Dependent Orifice Types
      </h3>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        Multiple-Orifice Type
      </h4>
      <p>
        Double structure comprising outer tube and inner tube. The orifice area at impact moment is larger compared to single type, gradually decreasing as stroke advances, suppressing overall resistance. Theoretically, resistance during stroke can be maintained constant. Orifice design can be modified according to impact conditions.
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        Multiple Varying Orifice Type
      </h4>
      <p>
        Same structure as multiple-orifice type but provides resistance characteristics suitable for intended use rather than constant damping force. Designed to absorb kinetic energy in first half of stroke and perform speed control during last half, achieving ideal energy absorption.
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2">
        Groove-Orifice Type
      </h4>
      <p>
        Single tube system where orifice groove on inside wall changes as stroke advances. Large orifice area at stroke beginning, becoming smaller as stroke advances. Orifice area changes continuously, resulting in less resistance fluctuation compared to multiple type, enabling optimal energy absorption.
      </p>
    </section>
  );
};

export default LinearDamperTypes;