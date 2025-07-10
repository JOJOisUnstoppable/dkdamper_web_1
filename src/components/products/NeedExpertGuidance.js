import React from 'react';

const NeedExpertGuidance = () => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-12 rounded-lg shadow-xl my-16 mx-40">
            <h2 className="text-6xl font-bold mb-4">Need Expert Guidance on Linear Dampers?</h2>
            <p className="text-lg mb-8">
                Our engineering team can help you select the perfect damping solution for your specific application. 
                Get professional consultation and custom solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                    href="/contact" 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                    Contact Our Engineers
                </a>
                <a 
                    href="/quote" 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                    Request Quote
                </a>
            </div>
        </section>
    );
};

export default NeedExpertGuidance;