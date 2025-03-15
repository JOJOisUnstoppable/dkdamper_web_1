'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductDetail({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  // Add form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    content: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        content: ''
      })
      
      setTimeout(() => {
        setShowInquiryModal(false)
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      alert('Submission failed, please try again later')
    } finally {
      setSubmitting(false)
    }
  }

  // Mock product data
  const product = products.find(p => p.id === parseInt(params.id)) || products[0]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Main Info */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 w-full h-96 rounded-lg mb-4">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* ... rest of the image gallery code ... */}
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Product Specs */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-600">{key}：</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Inquiry Button */}
            <button 
              onClick={() => setShowInquiryModal(true)}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90"
            >
              Inquiry Now
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="prose max-w-none">
            {product.details.map((detail, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold mb-4">{detail.title}</h3>
                <p className="text-gray-600">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link 
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-full h-48 bg-gray-200">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Inquiry Modal */}
        {showInquiryModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Product Inquiry</h3>
                <button 
                  onClick={() => setShowInquiryModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xl font-semibold text-gray-900">Submitted Successfully</p>
                  <p className="text-gray-500 mt-2">We will contact you soon</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Contact Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                      required
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowInquiryModal(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'erp', name: 'ERP Systems' },
  { id: 'crm', name: 'CRM Systems' },
  { id: 'scm', name: 'Supply Chain Management' },
  { id: 'bi', name: 'Business Intelligence' }
]

const products = [
  {
    id: 1,
    name: 'Enterprise ERP System',
    description: 'Comprehensive enterprise resource planning solution to help businesses achieve digital transformation and improve operational efficiency.',
    category: 'erp',
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4'
    ],
    specs: {
      'Scale': 'Medium to Large Enterprise',
      'Deployment': 'Private/Public Cloud',
      'License': 'Perpetual',
      'Architecture': 'Microservices'
    },
    features: [
      'Multi-module Integration',
      'Real-time Data Analysis',
      'Intelligent Decision Support',
      'Highly Customizable'
    ],
    details: [
      {
        title: 'System Architecture',
        content: 'Adopts advanced microservice architecture to ensure high availability and scalability...'
      },
      {
        title: 'Function Modules',
        content: 'Includes financial management, HR, supply chain, production management and more...'
      }
    ]
  },
  // ... other product data
]