'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProductById } from '@/data/products/index'

export default function ProductDetail({ params }) {
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  
  const product = getProductById(params.id)
  
  if (!product) {
    return <div>Product not found (ID: {params.id})</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/categories" className="hover:text-primary">Products</Link>
            <span>/</span>
            <Link href={`/products/categories/${product.categoryId}`} className="hover:text-primary">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm space-y-8">
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image || '/images/product-placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">{key}</div>
                      <div className="font-medium">
                        {typeof value === 'object' ? value.value : value}
                        {typeof value === 'object' && value.isCustomizable && 
                          <span className="ml-2 text-sm text-primary"></span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 font-medium"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Background Section */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Product Background</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Development Background</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.background.development}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Achievements</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.background.achievement}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Current Status</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.background.status}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Market Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.background.marketInsight}
                </p>
              </div>
            </div>
          </div>

          {/* Core Advantages Section */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Core Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.advantages?.map((adv) => (
                <div key={adv.id} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">{adv.title}</h3>
                  <p className="text-gray-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {/* Icon placeholder */}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.id}</h3>
                    <p className="text-gray-600">{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Section */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Parameter</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Value</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-6 py-4 text-sm text-gray-900">{key}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {typeof value === 'object' ? value.value : value}
                        {typeof value === 'object' && value.isCustomizable && 
                          <span className="ml-2 text-sm text-primary"></span>
                        }
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {typeof value === 'object' && value.notes ? value.notes : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Case Studies Section */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.cases?.map((case_) => (
                <div key={case_.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={case_.image || '/images/case-placeholder.jpg'}
                      alt={case_.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{case_.title}</h3>
                    <p className="text-gray-600 text-sm">{case_.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}