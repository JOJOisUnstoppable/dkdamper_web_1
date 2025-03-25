'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProducts } from 'contentlayer/generated'

export default function ProductDetail({ params }) {
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  const product = allProducts.find(p => p.id === Number(params.id))
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <Link href={`/products?category=${product.category}`} className="hover:text-primary">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm">
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
                      <div className="font-medium">{value}</div>
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

          {/* Product Detail Tabs */}
          <div className="border-t">
            <div className="flex border-b">
              {['overview', 'features', 'specs', 'cases'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab === 'overview' && 'Overview'}
                  {tab === 'features' && 'Features'}
                  {tab === 'specs' && 'Specifications'}
                  {tab === 'cases' && 'Case Studies'}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Background</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {product.origin || 'This product originated from extensive research in industrial automation...'}
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Core Advantages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {product.advantages?.map((adv, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="font-bold mb-2">{adv.title}</h3>
                          <p className="text-gray-600">{adv.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {/* Icon placeholder */}
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Feature {index + 1}</h3>
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'specs' && (
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
                          <td className="px-6 py-4 text-sm text-gray-600">{value}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'cases' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.cases?.map((case_, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}