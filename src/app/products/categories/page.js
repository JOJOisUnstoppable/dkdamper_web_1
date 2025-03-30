'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/categories'
import { getProductById } from '@/data/products'

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12 // 修改为12，确保每页显示4行3列
  
  // 获取所有产品
  const getAllProducts = () => {
    return categories
      .filter(cat => cat.id !== 'all')
      .flatMap(cat => cat.products)
  }

  // 获取当前分类的产品
  const getCurrentProducts = () => {
    if (activeCategory === 'all') {
      return getAllProducts()
    }
    return categories.find(cat => cat.id === activeCategory)?.products || []
  }

  const products = getCurrentProducts()
  const totalPages = Math.ceil(products.length / productsPerPage)
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Categories */}
      <div className="bg-white shadow relative">
        <div className="container mx-auto px-4 pt-[100px] pb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Products</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => {
                setActiveCategory('all')
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            {categories.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((productId) => {
            const product = getProductById(productId)
            if (!product) return null

            return (
              <Link
                key={productId}
                href={`/products/${productId}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                {/* 调整图片容器高度比例 */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {/* 调整标题和描述文字大小 */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-primary/80 text-base mb-3">{product.shortDescription}</p>
                  <p className="text-gray-600 text-base mb-5 line-clamp-2">{product.description}</p>
                  
                  {/* Technical Specifications */}
                  <div className="mb-5">
                    <h5 className="font-semibold text-gray-900 mb-3 text-base">Technical Specifications:</h5>
                    <ul className="space-y-2">
                      <li className="text-base text-gray-600">
                        Diameter: {product.specs?.diameter?.value || 'N/A'}
                      </li>
                      <li className="text-base text-gray-600">
                        Stroke: {product.specs?.strokeRange?.value || 'N/A'}
                      </li>
                      <li className="text-base text-gray-600">
                        Temperature: {product.specs?.operatingTemperature || 'N/A'}
                      </li>
                      <li className="text-base text-gray-600">
                        Life Cycles: {product.specs?.serviceLife?.value || 'N/A'}
                      </li>
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="mb-5">
                    <h5 className="font-semibold text-gray-900 mb-3 text-base">Key Features:</h5>
                    <ul className="space-y-2">
                      {product.features?.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-base">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature.content}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantage Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {product.advantages?.slice(0, 2).map((adv) => (
                      <span
                        key={adv.id}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {adv.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === i + 1
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}