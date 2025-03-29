'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      id: 'medical',
      name: 'Medical Equipment Series',
      description: 'High-precision dampers specifically designed for medical equipment',
      image: '/images/categories/medical.jpg',
      products: ['JP-CA1210', 'JP-CA10'],
      features: [
        'High Precision Control',
        'Reliable Performance',
        'Extended Service Life',
        'Medical Equipment Standards Compliant'
      ]
    },
    {
      id: 'industrial',
      name: 'Industrial Applications Series',
      description: 'Dampers suitable for various industrial equipment',
      image: '/images/categories/industrial.jpg',
      products: ['PR-L202', 'PR-L208'],
      features: [
        'High Temperature Resistance',
        'Wide Force Range',
        'Stable Performance'
      ]
    },
    {
      id: 'precision',
      name: 'Precision Control Series',
      description: 'Dampers providing precise motion control',
      image: '/images/categories/precision.jpg',
      products: ['PR-L223'],
      features: [
        'Precise Control',
        'Low Noise Operation',
        'Compact Design'
      ]
    },
    {
      id: 'heavy-duty',
      name: 'Heavy-duty Series',
      description: 'Dampers for high-force applications',
      image: '/images/categories/heavy-duty.jpg',
      products: ['PR-L241'],
      features: [
        'High Force Range',
        'Enhanced Durability',
        'Reliable Performance'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Series',
      description: 'General-purpose damper series',
      image: '/images/categories/standard.jpg',
      products: ['JP-801 Series', 'JP-802 Series', 'JP-803 Series', 'JP-804 Series'],
      features: [
        'Complete Specifications',
        'Cost-effective',
        'Wide Application Range'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="bg-white shadow relative">
        <div className="container mx-auto px-4 min-h-[50vh] flex flex-col justify-center pt-[182px] pb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Product Series</h1>
          <p className="text-2xl text-gray-600 max-w-3xl">
            Choose the linear damper series that suits your needs
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Series
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Series Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories
            .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
            .map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="aspect-video relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                      <ul className="space-y-2">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Products Included:</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/products/categories/${category.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mt-auto"
                  >
                    View Details
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}