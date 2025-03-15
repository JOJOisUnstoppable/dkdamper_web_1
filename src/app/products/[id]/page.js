'use client'
import { useContext } from 'react'
import Link from 'next/link'
import { ProductsContext } from '@/contexts/ProductsContext'

export default function ProductDetail({ params }) {
  const products = useContext(ProductsContext)
  
  const product = products.find(p => p.id === parseInt(params.id)) || products[0]
  
  return (
    <div className="min-h-screen py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <Link 
              href={`/products?category=${product.category}`} 
              className="hover:text-primary"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="text-gray-600">{key}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setShowInquiryModal(true)}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90"
          >
            Contact Us
          </button>
        </div>
      </article>
    </div>
  )
}