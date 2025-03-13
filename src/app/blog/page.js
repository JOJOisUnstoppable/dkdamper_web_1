'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPosts = posts.filter(post => 
    activeCategory === 'all' ? true : post.category === activeCategory
  )

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">博客文章</h1>
          <p className="text-xl">分享行业见解和技术动态</p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
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

      {/* Blog List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  { id: 'all', name: '全部' },
  { id: 'tech', name: '技术动态' },
  { id: 'industry', name: '行业资讯' },
  { id: 'solution', name: '解决方案' },
  { id: 'case', name: '客户案例' }
]

const posts = [
  {
    id: 1,
    title: '企业数字化转型的关键步骤',
    excerpt: '数字化转型是企业发展的必经之路，本文将详细介绍企业数字化转型的关键步骤和注意事项...',
    category: 'tech',
    date: '2024-01-01',
    author: '张三'
  },
  {
    id: 2,
    title: '2024年B2B行业发展趋势',
    excerpt: '随着技术的不断发展，B2B行业正在经历深刻的变革。本文将分析2024年B2B行业的主要发展趋势...',
    category: 'industry',
    date: '2024-01-02',
    author: '李四'
  },
  {
    id: 3,
    title: '如何选择合适的企业解决方案',
    excerpt: '面对市场上众多的企业解决方案，如何选择最适合自己企业的方案？本文将为您提供专业的建议...',
    category: 'solution',
    date: '2024-01-03',
    author: '王五'
  },
  {
    id: 4,
    title: '某制造企业数字化转型案例分析',
    excerpt: '通过具体案例分析，深入了解制造企业是如何通过数字化转型提升生产效率的...',
    category: 'case',
    date: '2024-01-04',
    author: '赵六'
  }
]