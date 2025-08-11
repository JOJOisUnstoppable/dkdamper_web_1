import React from 'react';

const ApplicationsAndIndustries = ({ section, applications, industries }) => {
    return (
    <section className="bg-white p-12 rounded-lg shadow-md shadow-xl my-16 mx-40">
            <div className="container px-4">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500">{applications.sectionTitle}</h2>
                <h4 className="text-xl font-bold text-gray-700 my-2">{applications.miniLinearDamper.title}</h4>
                <ul className="list-disc pl-6">
                    {applications.miniLinearDamper.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h4 className="text-xl font-bold text-gray-700 mb-2">{applications.damperWithBothEndFittings.title}</h4>
                <ul className="list-disc pl-6">
                    {applications.damperWithBothEndFittings.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-4">{applications.benefitsInEachApplication.title}</h3>
                <ul className="list-disc pl-6">
                    {applications.benefitsInEachApplication.items.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ApplicationsAndIndustries;