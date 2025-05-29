'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 修改 Accordion 组件
function Accordion({ title, children, isOpen, onClick }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        className="w-full p-4 text-left font-medium flex justify-between items-center bg-gray-50"
        onClick={onClick}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default function IndustryPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('automotive')
  // 添加状态来跟踪当前打开的手风琴项
  const [openAccordion, setOpenAccordion] = useState(null)

  const cases = [
    {
      id: 1,
      title: 'Large Manufacturing Enterprise Digital Transformation',
      description: 'Helped client improve production efficiency by 30% through smart manufacturing solutions',
      industry: 'Manufacturing'
    },
    {
      id: 2,
      title: 'National Retail Chain System Upgrade',
      description: 'Achieved 50% sales increase through omni-channel implementation',
      industry: 'Retail'
    },
    {
      id: 3,
      title: 'Logistics Company Delivery Optimization',
      description: 'Improved delivery efficiency by 40% with smart dispatching system',
      industry: 'Logistics'
    }
  ]

  const industries = [
    {
      id: 'automotive',
      name: 'Automotive Industry',
      icon: '🚗',
      solutions: [
        {
          id: 'automotive-control',
          title: 'Automotive Motion Control Solutions',
          description: 'Advanced damping technology designed specifically for automotive applications, providing smooth operation and enhanced user experience for various vehicle components.',
          features: ['Smooth Operation', 'Noise Reduction', 'Temperature Resistance', 'Durability Tested', 'Compact Design', 'Easy Installation'],
          image: '/images/solutions/automotive.jpg'
        },
        {
          id: 'automotive-damping',
          title: 'Automotive Damping Systems',
          description: '高性能汽车减震系统，提供平稳驾驶体验',
          features: ['减少振动', '提高舒适度', '延长部件寿命', '适应各种路况'],
          image: '/images/solutions/automotive-damping.jpg'
        },
        {
          id: 'automotive-door',
          title: 'Door Control Solutions',
          description: '汽车门控制系统，确保平稳开关',
          features: ['无噪音操作', '防夹保护', '可调节力度', '耐用设计'],
          image: '/images/solutions/door-control.jpg'
        }
      ]
    },
    {
      id: 'commercial-vehicles',
      name: 'Commercial Vehicles',
      icon: '🚛',
      solutions: [
        {
          id: 'commercial-systems',
          title: 'Commercial Vehicle Control Systems',
          description: 'Heavy-duty damping solutions for commercial vehicles, ensuring reliable performance in demanding conditions.',
          features: ['Heavy Load Capacity', 'Extended Lifespan', 'Weather Resistant', 'Low Maintenance'],
          image: '/images/solutions/commercial.jpg'
        }
      ]
    },
    {
      id: 'transportation',
      name: 'Aviation, Marine & Rail',
      icon: '✈️',
      solutions: [
        {
          id: 'transport-solutions',
          title: 'Transportation Motion Control',
          description: 'High-performance damping solutions for aviation, marine, and rail applications, meeting strict industry standards.',
          features: ['High Reliability', 'Safety Certified', 'Precision Control', 'Environmental Resistance'],
          image: '/images/solutions/transportation.jpg'
        }
      ]
    },
    {
      id: 'energy-construction',
      name: 'Energy & Construction',
      icon: '⚡',
      solutions: [
        {
          id: 'industrial-damping',
          title: 'Industrial Damping Systems',
          description: 'Robust damping solutions for energy and construction equipment, ensuring safe and efficient operations.',
          features: ['Heavy-duty Performance', 'Safety Enhancement', 'Vibration Control', 'Structural Protection'],
          image: '/images/solutions/energy.jpg'
        }
      ]
    },
    {
      id: 'automation',
      name: 'Machine & Automation',
      icon: '🤖',
      solutions: [
        {
          id: 'automation-control',
          title: 'Automation Control Solutions',
          description: 'Precise motion control solutions for automated machinery and production systems.',
          features: ['Precise Control', 'System Integration', 'Production Efficiency', 'Customizable Solutions'],
          image: '/images/solutions/automation.jpg'
        }
      ]
    },
    {
      id: 'lifestyle',
      name: 'Health & Furniture',
      icon: '🏥',
      solutions: [
        {
          id: 'lifestyle-solutions',
          title: 'Lifestyle & Comfort Solutions',
          description: 'Quality damping solutions for medical equipment, furniture, and recreational applications.',
          features: ['Smooth Operation', 'User Comfort', 'Reliable Performance', 'Design Integration'],
          image: '/images/solutions/lifestyle.jpg'
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section with Industry Navigation */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/industrial_robot_bg.jpg"
            alt="Industrial background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* 左侧 - 技术部分 */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Technologies</h2>
              <p className="text-lg mb-12">
                With Linear damper from our company, you create smooth-running, safe and high-quality product experiences. Get to know our range of motion control solutions and discover the right solution specifically for your industry.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    title: "Electric motion control solutions",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Mechanical motion control solutions",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )
                  },
                  {
                    title: "Innovations",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    )
                  }
                ].map((tech, index) => (
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
              <h2 className="text-4xl font-bold mb-8">Industries & Applications</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`bg-blue-800 p-6 rounded-lg text-center cursor-pointer transition-colors ${
                      selectedIndustry === industry.id 
                        ? 'ring-2 ring-white bg-blue-700' 
                        : 'hover:bg-blue-700'
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      {industry.icon}
                    </div>
                    <p className="text-sm">{industry.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Industry Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {industries
              .find((i) => i.id === selectedIndustry)
              ?.solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* 左侧图片区域 - 保持不变 */}
                    <div className="w-full md:w-1/3 bg-gray-100 relative">
                      <div className="aspect-[4/3]">
                        <img
                          src={solution.image || "/images/placeholder.jpg"}
                          alt={solution.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* 右侧内容区域 - 修改布局 */}
                    <div className="w-full md:w-2/3 p-8">
                      <div className="flex flex-col h-full">
                        {/* 标题和描述 */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                          <p className="text-gray-600">{solution.description}</p>
                        </div>

                        {/* Accordion 特点列表 - 修改为互斥模式 */}
                        <div className="flex-grow mb-6">
                          <Accordion 
                            title="Features & Benefits" 
                            isOpen={openAccordion === 'features'}
                            onClick={() => setOpenAccordion(openAccordion === 'features' ? null : 'features')}
                          >
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              {solution.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-gray-700">
                                  <svg
                                    className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </Accordion>
                          
                          <Accordion 
                            title="Technical Specifications" 
                            isOpen={openAccordion === 'specs'}
                            onClick={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
                          >
                            <div className="pt-2">
                              <p className="text-gray-600">
                                Our products meet the highest industry standards and are designed for optimal performance in various environments.
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                                <li>Operating temperature: -20°C to +80°C</li>
                                <li>Durability: 100,000+ cycles</li>
                                <li>Material: High-grade aluminum and steel components</li>
                                <li>Certification: ISO 9001, CE certified</li>
                              </ul>
                            </div>
                          </Accordion>
                          
                          <Accordion 
                            title="Applications" 
                            isOpen={openAccordion === 'applications'}
                            onClick={() => setOpenAccordion(openAccordion === 'applications' ? null : 'applications')}
                          >
                            <div className="pt-2">
                              <p className="text-gray-600">
                                Our solutions are widely used in various applications within the {industries.find(i => i.id === selectedIndustry)?.name} sector.
                              </p>
                              <div className="grid grid-cols-2 gap-2 mt-3">
                                <div className="bg-gray-50 p-3 rounded">
                                  <p className="font-medium">Primary Uses</p>
                                  <p className="text-sm text-gray-500">Motion control and damping</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <p className="font-medium">Environments</p>
                                  <p className="text-sm text-gray-500">Indoor and outdoor applications</p>
                                </div>
                              </div>
                            </div>
                          </Accordion>
                        </div>

                        {/* 按钮区域 */}
                        <div className="mt-auto flex justify-end">
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

  
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us for Professional Solutions</h2>
          <p className="text-gray-600 mb-12">
            Our professional team is ready to provide customized damper solutions to help you address motion control needs in various application scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-gray-50 p-8 rounded-xl">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  <span>+86 XXX-XXXX-XXXX</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>contact@example.com</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>Address Information</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Online Consultation</h3>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{case_.industry}</span>
                    <Link
                      href={`/case-study/${case_.id}`}
                      className="text-primary hover:text-secondary"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-gray-600 mb-8">Our expert team is ready to provide professional advice</p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>


    </div>
  )
}

