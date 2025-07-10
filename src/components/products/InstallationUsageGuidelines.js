import React from 'react';

const InstallationUsageGuidelines = () => {
    return (
        <section className="py-16 shadow-xl my-16 mx-40">
            <div className="container p-10">
                <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">Installation and Usage Guidelines</h2>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8">
                    <h4 className="text-yellow-600 text-xl mb-4">Important Safety Precautions</h4>
                    <ul className="list-disc pl-6">
                        <li>Always use with an external stopper to prevent over-compression</li>
                        <li>Ensure sufficient mounting strength is secured for the damper</li>
                        <li>Do not use in vacuum environments or where oil contact may occur</li>
                        <li>Avoid applying eccentric loads to the damper</li>
                        <li>Handle with care to prevent damage from falling impacts</li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-700 mb-4">Installation Best Practices</h3>
                <ul className="list-disc pl-6">
                    <li><strong>Mounting:</strong> Secure both ends with appropriate fasteners</li>
                    <li><strong>Alignment:</strong> Ensure proper axial alignment to prevent binding</li>
                    <li><strong>Stroke Limits:</strong> Never exceed the specified stroke length</li>
                    <li><strong>Parallel Installation:</strong> Two or more dampers can be used in parallel for increased capacity</li>
                    <li><strong>Environmental:</strong> Protect from extreme temperatures and contamination</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Operational Considerations</h3>
                <ul className="list-disc pl-6">
                    <li>Do not press piston rod beyond used stroke (causes incomplete return)</li>
                    <li>Do not pull linear damper beyond used stroke (causes damage)</li>
                    <li>Large gaps between pressing and returning time may affect durability</li>
                    <li>Confirm performance in actual machine before use</li>
                </ul>
            </div>
        </section>
    );
};

export default InstallationUsageGuidelines;