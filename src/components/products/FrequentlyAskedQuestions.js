import React from 'react';

const FrequentlyAskedQuestions = ({ section, questions }) => {
    return (
        <section className="bg-gray-100 p-8 rounded-lg shadow-xl my-16 mx-40">
            <h2 className="text-6xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-8">{questions.sectionTitle}</h2>
            <div className="space-y-6">
                {questions.questionsAndAnswers.map((qa, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="faq-question font-bold text-lg text-gray-700 mb-2">
                            {qa.question}
                        </div>
                        <div className="faq-answer text-gray-600">
                            {qa.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;