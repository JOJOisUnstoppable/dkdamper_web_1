import React from 'react';

const InstallationUsageGuidelines = ({ section, guidelines }) => {
    return (
        <section className="py-16 shadow-xl my-16 mx-40">
            <div className="container p-10">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">{guidelines.sectionTitle}</h2>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8">
                    <h4 className="text-yellow-600 text-xl mb-4">{guidelines.importantSafetyPrecautions.title}</h4>
                    <ul className="list-disc pl-6">
                        {guidelines.importantSafetyPrecautions.precautions.map((precaution, index) => (
                            <li key={index}>{precaution}</li>
                        ))}
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-700 mb-4">{guidelines.installationBestPractices.title}</h3>
                <ul className="list-disc pl-6">
                    {guidelines.installationBestPractices.practices.map((practice, index) => (
                        <li key={index}><strong>{practice}</strong></li>
                    ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-4">{guidelines.operationalConsiderations.title}</h3>
                <ul className="list-disc pl-6">
                    {guidelines.operationalConsiderations.considerations.map((consideration, index) => (
                        <li key={index}>{consideration}</li>
                    ))}
                </ul>

                {/* 添加两张横向并排的图片 */}
                <div className="flex justify-between">
                    <img src="/images/products/install_1.png" alt={guidelines.images.firstImageAlt} className="w-1/2 mr-4" />
                    <img src="/images/products/install_2.png" alt={guidelines.images.secondImageAlt} className="w-1/2" />
                </div>
            </div>
        </section>
    );
};

export default InstallationUsageGuidelines;