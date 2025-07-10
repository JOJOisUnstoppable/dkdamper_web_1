import React from 'react';

const ApplicationsAndIndustries = () => {
    return (
        <section className="py-16 shadow-xl my-16 mx-40">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500">Applications and Industries</h2>

                <h3 className="text-2xl font-bold text-gray-700 mb-4">Industrial Applications</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Automation Equipment:</strong> Conveyor systems, robotic arms, assembly machines</li>
                    <li><strong>Machine Tools:</strong> CNC machines, press brakes, cutting equipment</li>
                    <li><strong>Transportation:</strong> Vehicle doors, hoods, tailgates, seat mechanisms</li>
                    <li><strong>Furniture:</strong> Cabinet doors, drawers, fold - down mechanisms</li>
                    <li><strong>Medical Equipment:</strong> Hospital beds, examination tables, equipment covers</li>
                    <li><strong>Aerospace:</strong> Landing gear, control surfaces, access panels</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefits in Each Application</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Noise Reduction:</strong> Eliminates slamming and impact noise</li>
                    <li><strong>Safety:</strong> Prevents finger pinching and component damage</li>
                    <li><strong>Smooth Operation:</strong> Provides controlled, predictable motion</li>
                    <li><strong>Extended Life:</strong> Reduces wear on hinges and mounting hardware</li>
                    <li><strong>Premium Feel:</strong> Adds sophistication to product operation</li>
                </ul>
            </div>
        </section>
    );
};

export default ApplicationsAndIndustries;