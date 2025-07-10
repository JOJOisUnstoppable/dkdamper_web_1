import React from 'react';

const FrequentlyAskedQuestions = () => {
    return (
        <section className="bg-gray-100 p-8 rounded-lg shadow-xl my-16 mx-40">
            <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        What's the difference between a linear damper and a piston damper?
                    </div>
                    <div className="faq-answer text-gray-600">
                        Linear dampers and piston dampers are essentially the same device. Both use a piston moving within a cylinder filled with hydraulic oil to create damping force. The terms are often used interchangeably, with "linear damper" emphasizing the linear motion control aspect, while "piston damper" highlights the internal piston mechanism.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        How do I choose the right force range for my application?
                    </div>
                    <div className="faq-answer text-gray-600">
                        The force range depends on the mass of the object being damped and the desired deceleration rate. For lightweight applications (under 5kg), our Φ6mm or Φ8mm dampers are suitable. For medium loads (5 - 20kg), consider Φ10mm dampers. For heavy - duty applications (over 20kg), our Φ12mm max dampers provide up to 2400N of force.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        Can linear dampers be used in both directions?
                    </div>
                    <div className="faq-answer text-gray-600">
                        Our standard dampers provide one - way damping with spring return. The damping action occurs during compression, while the spring provides return force. For applications requiring bidirectional damping, we offer specialized two - way damping configurations.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        What maintenance do linear dampers require?
                    </div>
                    <div className="faq-answer text-gray-600">
                        Linear dampers are generally maintenance - free devices. However, regular inspection for leaks, proper mounting, and ensuring the stroke limits are not exceeded will maximize service life. Avoid exposure to extreme temperatures and contamination.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        How long do linear dampers last?
                    </div>
                    <div className="faq-answer text-gray-600">
                        Service life depends on application conditions, but properly installed and operated linear dampers can provide millions of cycles. Factors affecting longevity include operating temperature, stroke frequency, load conditions, and environmental factors.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                        Can multiple dampers be used together?
                    </div>
                    <div className="faq-answer text-gray-600">
                        Yes, two or more linear dampers can be used in parallel to increase the total damping force. This is particularly useful for heavy - duty applications or when redundancy is required. Ensure proper alignment and equal load distribution when using multiple units.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;