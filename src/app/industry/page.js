'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function IndustryPage() {
  const [activeTab, setActiveTab] = useState('manufacturing')

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl">Professional Solutions for Different Industries</p>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeTab === industry.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {industry.icon} {industry.name}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries
              .find((i) => i.id === activeTab)
              ?.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-8 h-8 text-primary">{solution.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-primary mr-2"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?solution=${solution.title}`}
                    className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
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

// Update industries data
const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    solutions: [
      {
        title: 'Smart Manufacturing Solutions',
        description: 'Enhance production efficiency through digital transformation',
        icon: '⚙️',
        features: [
          'Production Line Automation',
          'Real-time Monitoring System',
          'Quality Management',
          'Predictive Maintenance'
        ]
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Optimize supply chain management for operational efficiency',
        icon: '🔄',
        features: [
          'Inventory Management',
          'Supplier Collaboration',
          'Logistics Tracking',
          'Cost Control'
        ]
      }
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: '🚛',
    solutions: [
      {
        title: 'Smart Logistics System',
        description: 'End-to-end logistics solutions',
        icon: '📦',
        features: [
          'Route Optimization',
          'Fleet Management',
          'Warehouse Management',
          'Delivery Tracking'
        ]
      },
      {
        title: 'Warehouse Automation',
        description: 'Improve warehouse efficiency and accuracy',
        icon: '🏭',
        features: [
          'Automatic Sorting',
          'Inventory Management',
          'Order Processing',
          'Real-time Monitoring'
        ]
      }
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '🏪',
    solutions: [
      {
        title: 'Omni-channel Retail',
        description: 'Integrate online and offline sales channels',
        icon: '🛍️',
        features: [
          'Membership Management',
          'Inventory Synchronization',
          'Order Management',
          'Data Analytics'
        ]
      },
      {
        title: 'Smart Marketing',
        description: 'Precision marketing solutions',
        icon: '📱',
        features: [
          'Customer Profiling',
          'Personalized Recommendations',
          'Marketing Automation',
          'Performance Analytics'
        ]
      }
    ]
  }
]

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