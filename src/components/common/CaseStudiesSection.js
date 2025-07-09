// CaseStudiesSection.js
'use client'
import Image from 'next/image'
import Link from 'next/link'

const CaseStudiesSection = ({
    backgroundImageSrc,
    backgroundImageAlt,
    techTitle,
    techDescription,
    techList,
    industryTitle,
    industryList
}) => {
    return (
        <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImageSrc}
                    alt={backgroundImageAlt}
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* 左侧 - 技术部分 */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">{techTitle}</h2>
                        <p className="text-lg mb-12">{techDescription}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {techList.map((tech, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {tech.icon}
                                    </div>
                                    <p className="text-sm">{tech.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 右侧 - 行业与应用部分 */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">{industryTitle}</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {industryList.map((industry, index) => (
                                <div key={index} className="bg-blue-800 p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
                                    <div className="flex justify-center mb-4">
                                        {industry.icon}
                                    </div>
                                    <p className="text-sm">{industry.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesSection