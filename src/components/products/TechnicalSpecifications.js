import React from 'react';

const TechnicalSpecifications = () => {
    return (
        <section className="py-16 shadow-xl my-16 mx-40">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">Technical Specifications</h2>

                <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
                    <h4 className="text-blue-300 text-xl mb-4">Common Specifications</h4>
                    <ul className="list-none">
                        <li className="py-2 border-b border-gray-700">
                            <strong>Piston Rod Recovery Force:</strong> With returning spring ≤5N (0.5 kgf), Without returning spring ≤1.5N (0.15 kgf)
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>Main Unit Material:</strong> High-grade resin construction
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>Operating Temperature Range:</strong> 5~40°C (41~104°F)
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>Mounting Options:</strong> Various end configurations available
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>Stroke Options:</strong> Customizable stroke lengths
                        </li>
                        <li className="py-2">
                            <strong>Damping Direction:</strong> One-way, two-way options available
                        </li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-700 mb-4">Performance Characteristics</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Velocity-Squared Resistance:</strong> Hydraulic pressure proportional to square of collision velocity</li>
                    <li><strong>Energy Conversion:</strong> Kinetic energy converted to heat energy and dissipated</li>
                    <li><strong>Customizable Damping:</strong> Adjustable characteristics through orifice design</li>
                    <li><strong>Parallel Operation:</strong> Multiple units can be used in parallel for increased capacity</li>
                </ul>
            </div>
        </section>
    );
};

export default TechnicalSpecifications;