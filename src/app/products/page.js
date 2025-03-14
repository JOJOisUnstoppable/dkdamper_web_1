'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' ? true : product.category === activeCategory
  )

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">产品中心</h1>
          <p className="text-xl">为您提供专业的B2B解决方案</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 bg-gray-200 group-hover:opacity-90 transition-opacity"></div>
                  <div className="p-6">
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-primary font-semibold">详细信息</span>
                      <svg className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                上一页
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                下一页
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'erp', name: 'ERP系统' },
  { id: 'crm', name: 'CRM系统' },
  { id: 'scm', name: '供应链管理' },
  { id: 'bi', name: '商业智能' }
]

const products = [
  {
    id: 1,
    name: '企业ERP管理系统',
    description: '全面的企业资源规划解决方案，帮助企业实现数字化转型...',
    category: 'erp'
  },
  {
    id: 2,
    name: '智能CRM系统',
    description: '基于AI的客户关系管理系统，提升客户服务质量...',
    category: 'crm'
  },
  {
    id: 3,
    name: '供应链优化平台',
    description: '智能供应链管理系统，实现采购、库存、物流全程可视化...',
    category: 'scm'
  },
  // ... 更多产品数据
]