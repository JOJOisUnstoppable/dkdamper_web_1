'use client'
import { useState } from 'react'
import Link from 'next/link'
import { trackUserBehavior } from '@/utils/analytics'
import { allPosts } from 'contentlayer/generated'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'tech', name: 'Technology Updates' },
  { id: 'industry', name: 'Industry News' },
  { id: 'solution', name: 'Solutions' },
  { id: 'case', name: 'Case Studies' }
]

const tags = [
  'B2B', 'Digital Transformation', 'Solutions', 'Tech Innovation', 
  'Enterprise Management', 'Industry Trends', 'Best Practices', 'Case Analysis'
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeTag, setActiveTag] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // 修改这一行：将 posts 改为 allPosts
  const filteredPosts = allPosts.filter(post => {
    const matchCategory = activeCategory === 'all' ? true : post.category === activeCategory
    const matchTag = activeTag === 'all' ? true : post.tags?.includes(activeTag)
    const matchSearch = searchTerm === '' ? true : 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchTag && matchSearch
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

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1)
    // 记录分类切换行为
    trackUserBehavior('category_filter', { category })
  }

  const handleTagChange = (tag) => {
    setActiveTag(tag)
    setCurrentPage(1)
    // 记录标签筛选行为
    trackUserBehavior('tag_filter', { tag })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // 记录搜索行为
    trackUserBehavior('search', { keyword: searchTerm })
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog Articles</h1>
          <p className="text-xl mb-8">Sharing Industry Insights and Technical Updates</p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-gray-600"
              >
                <svg 
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
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

      {/* Tags Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag('all')}
              className={`px-3 py-1 rounded-full text-sm ${
                activeTag === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              All Tags
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No articles found</h3>
              <button 
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('all')
                  setCurrentPage(1)
                }}
                className="mt-4 text-primary hover:text-secondary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
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
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === 1
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
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === totalPages
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

