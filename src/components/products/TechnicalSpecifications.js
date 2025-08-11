import React from 'react';

const TechnicalSpecifications = ({ specifications }) => {
    return (
        <section className="py-16 shadow-xl my-16 mx-40">
            <div className="container px-8">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">{specifications.sectionTitle}</h2>

                <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
                    <h4 className="text-blue-300 text-xl mb-4">{specifications.commonSpecifications.title}</h4>
                    <ul className="list-none">
                        <li className="py-2 border-b border-gray-700">
                            <strong>{specifications.commonSpecifications.pistonRodRecoveryForce}</strong>
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>{specifications.commonSpecifications.mainUnitMaterial}</strong>
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>{specifications.commonSpecifications.operatingTemperatureRange}</strong>
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>{specifications.commonSpecifications.mountingOptions}</strong>
                        </li>
                        <li className="py-2 border-b border-gray-700">
                            <strong>{specifications.commonSpecifications.strokeOptions}</strong>
                        </li>
                        <li className="py-2">
                            <strong>{specifications.commonSpecifications.dampingDirection}</strong>
                        </li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-700 mb-4">{specifications.performanceCharacteristics.title}</h3>
                <ul className="list-disc pl-6">
                    <li><strong>{specifications.performanceCharacteristics.velocitySquaredResistance}</strong></li>
                    <li><strong>{specifications.performanceCharacteristics.energyConversion}</strong></li>
                    <li><strong>{specifications.performanceCharacteristics.customizableDamping}</strong></li>
                    <li><strong>{specifications.performanceCharacteristics.parallelOperation}</strong></li>
                </ul>
            </div>
        </section>
    );
};

export default TechnicalSpecifications;