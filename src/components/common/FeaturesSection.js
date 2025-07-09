'use client'
import Image from 'next/image'

const FeaturesSection = ({ features }) => {
    return (
        <section className="h-screen flex items-center bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
                <div className="grid grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="relative h-64 mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;