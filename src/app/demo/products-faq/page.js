'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ProductsFAQDemo() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const featuredProducts = [
    {
      model: "JP-CA1210",
      subtitle: "Medical Equipment Damper",
      description: "High-precision damper specifically designed for medical equipment applications.",
      specs: [
        "Diameter: Φ12mm",
        "Stroke Length: 10mm",
        "Temperature Range: 40°C - 80°C",
        "Life Cycles: 50,000"
      ],
      features: [
        "Premium SUS304 Piston Rod",
        "Max Speed: 0.5m/sec",
        "15 Years Service Life"
      ],
      image: "/images/products/JP-CA1210.jpg"
    },
    {
      model: "PR-L202",
      subtitle: "High Temperature Linear Damper",
      description: "Professional damper designed for high-temperature industrial environments.",
      specs: [
        "Diameter: Φ10mm",
        "Force Range: 120N-410N",
        "Temperature: 20°C - 120°C",
        "Life Cycles: 100,000"
      ],
      features: [
        "SUS304 Shell Material",
        "Stroke: 14-17mm",
        "Silicone Oil Filled"
      ],
      image: "/images/products/PR-L202.jpg"
    },
    {
      model: "PR-L208",
      subtitle: "Heavy-duty Linear Damper",
      description: "Robust damper with high force capacity for industrial applications.",
      specs: [
        "Diameter: Φ10mm",
        "Force Range: 7N-870N",
        "Temperature: 20°C - 60°C",
        "Life Cycles: 100,000"
      ],
      features: [
        "Stainless Steel Construction",
        "Test Speed: 13mm/s",
        "Stroke Length: 14mm"
      ],
      image: "/images/products/PR-L208.jpg"
    }
  ]

  const faqs = [
    {
      question: "What is a Linear Damper?",
      answer: "A linear damper is a device that creates damping effects through the compression of hydraulic oil and flow through orifices. It is commonly used for buffering and decelerating various movements, converting kinetic energy into thermal energy for smooth motion control."
    },
    {
      question: "How does a Linear Damper work?",
      answer: "When an object impacts the piston rod, the force is transferred to the piston, which compresses the hydraulic oil. The oil flows through specially designed orifices, creating resistance that achieves deceleration and buffering effects. The damping effect varies depending on hydraulic pressure, orifice design, oil viscosity, and impact speed."
    },
    {
      question: "What are the main components of a Linear Damper?",
      answer: "The main components include: piston and piston rod (transferring external force to hydraulic oil), hydraulic oil (medium for creating resistance), and orifices (controlling oil flow rate and determining damping effect)."
    },
    {
      question: "What types of Linear Dampers are available?",
      answer: "Based on orifice design, they can be categorized into single-orifice type (providing constant damping force) and multi-orifice type (providing variable damping force). Based on force output direction, they can be push-in type, pull-out type, or two-way dampers."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gray-900">
        <Image
          src="/images/hero-bg.jpg"
          alt="Linear Dampers"
          fill
          className="object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">Linear Dampers</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Professional manufacturer of linear dampers with over 20 years of experience. Our products are widely used in medical equipment, automotive, industrial and other fields.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.model}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.model}</h3>
                  <h4 className="text-primary mb-3">{product.subtitle}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Technical Specifications:</h5>
                    <ul className="space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-600">{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">Key Features:</h5>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-primary font-medium hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View More Products Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Our Full Range</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our complete collection of linear dampers, including specialized solutions for various industries and applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Medical Series</h3>
              <p className="text-gray-600 mb-4">Precision dampers for medical equipment and healthcare applications</p>
              <span className="text-primary">12+ Models →</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Industrial Series</h3>
              <p className="text-gray-600 mb-4">Heavy-duty dampers for industrial machinery and equipment</p>
              <span className="text-primary">20+ Models →</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Automotive Series</h3>
              <p className="text-gray-600 mb-4">Specialized dampers for automotive and transportation</p>
              <span className="text-primary">15+ Models →</span>
            </div>
          </div>
          <a 
            href="/products/all" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Products
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
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
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <p className="p-6 text-gray-600 border-t">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Technical Support?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our engineering team can help you select the right damper for your application and provide customized solutions.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Contact Our Engineers
          </button>
        </div>
      </section>
    </div>
  )
}