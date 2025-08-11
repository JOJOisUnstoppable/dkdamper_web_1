'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { trackUserBehavior } from '@/utils/analytics'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'tech', name: 'Technology Updates' },
  { id: 'industry', name: 'Industry News' },
  { id: 'solution', name: 'Solutions' },
  { id: 'case', name: 'Case Studies' }
]



export default function BlogPage() {
  const { locale } = useParams() // 改为获取 locale 参数
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = allPosts.filter(post => {
    // 首先检查是否已发布（默认为 true）
    const isPublished = post.published !== false
    // 检查语言是否匹配
    const matchLang = post.lang === locale // 使用 locale 进行匹配
    return isPublished && matchLang
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 记录翻页行为
    trackUserBehavior('page_change', { page })
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog Articles</h1>
          <p className="text-xl mb-8">Sharing Industry Insights and Technical Updates</p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* 显示文章的 featuredimage */}
                    {post.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    {!post.image && (
                      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
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
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg ${currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-gray-100'
                      }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg ${currentPage === page
                          ? 'bg-primary text-white'
                          : 'bg-white hover:bg-gray-100'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-gray-100'
                      }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

