'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/blog/ShareButtons'
import { trackUserBehavior } from '@/utils/analytics'

export default function BlogDetail({ params }) {
  useEffect(() => {
    // Record article view
    trackUserBehavior('article_view', { articleId: params.id })
  }, [params.id])

  const handleShare = (platform) => {
    // 记录分享行为
    trackUserBehavior('article_share', { articleId: params.id, platform })
  }

  const [views, setViews] = useState(0)

  useEffect(() => {
    // 模拟从后端获取和更新阅读量
    const currentViews = parseInt(localStorage.getItem(`article_${params.id}_views`) || '0')
    setViews(currentViews + 1)
    localStorage.setItem(`article_${params.id}_views`, String(currentViews + 1))
  }, [params.id])

  return (
    <div className="min-h-screen py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>2024-01-01</span>
            <span>•</span>
            <Link href="/blog?category=tech" className="text-primary hover:text-secondary">
              Tech Updates
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {views} views
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            How to Choose the Right B2B Solution for Your Enterprise
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-semibold">Author Name</div>
                <div className="text-sm text-gray-500">Technical Director</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <p>
            In the wave of digital transformation, choosing the right B2B solution is crucial for enterprise development.
            This article will analyze how to select the most suitable solution for enterprises from multiple perspectives.
          </p>
          
          <h2>1. Evaluate Enterprise Needs</h2>
          <p>
            First, we need to clarify the specific needs and pain points of the enterprise, including:
          </p>
          <ul>
            <li>Business Process Optimization</li>
            <li>Cost Control</li>
            <li>Efficiency Improvement</li>
            <li>Customer Service Enhancement</li>
          </ul>

          <h2>2. Technical Architecture Considerations</h2>
          <p>
            Technical factors to consider when choosing a solution:
          </p>
          <ul>
            <li>System Compatibility</li>
            <li>Scalability</li>
            <li>Security</li>
            <li>Maintenance Cost</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Key Points</h3>
            <ul>
              <li>Clear Business Goals</li>
              <li>Technical Requirements Assessment</li>
              <li>Implementation Cost Consideration</li>
              <li>After-sales Service Focus</li>
            </ul>
          </div>
        </div>

        {/* Share & Tags */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {['B2B', 'Solutions', 'Digital Transformation'].map((tag, index) => (
                <Link 
                  key={index}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <ShareButtons 
              title="How to Choose the Right B2B Solution for Your Enterprise" 
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 mt-12 pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <Link 
                key={item} 
                href={`/blog/${item}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary">
                      Related Article Title
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      Article summary content...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}