import React from 'react';

const ApplicationsAndIndustries = () => {
    return (
    <section className="bg-white p-12 rounded-lg shadow-md shadow-xl my-16 mx-40">
            <div className="container px-4">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500">Applications and Industries</h2>
                <h4 className="text-xl font-bold text-gray-700 my-2">Mini Linear Damper</h4>
                <ul className="list-disc pl-6">
                    <li>Insulin Pen Injection</li>
                    <li>Oven Hinge</li>
                    <li>Refrigerator door</li>
                    <li>Furniture, like drawer, gate</li>
                </ul>
                <h4 className="text-xl font-bold text-gray-700 mb-2">Damper with both end fittings</h4>
                    <li>Door closer</li>
                    <li>Safety door</li>
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