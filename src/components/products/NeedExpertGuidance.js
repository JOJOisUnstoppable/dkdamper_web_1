import React from 'react';

const NeedExpertGuidance = ({ section }) => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-12 rounded-lg shadow-xl my-16 mx-40">
            <h2 className="text-6xl font-bold mb-4">{section.sectionTitle}</h2>
            <p className="text-lg mb-8">
                {section.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                    href="/contact" 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                    {section.contactEngineersBtn}
                </a>
                <a 
                    href="/contact" 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                    {section.requestQuoteBtn}
                </a>
            </div>
        </section>
    );
};

export default NeedExpertGuidance;