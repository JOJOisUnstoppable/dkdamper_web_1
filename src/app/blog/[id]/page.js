'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/blog/ShareButtons'

export default function BlogDetail({ params }) {
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
              技术动态
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {views} 次阅读
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            如何选择适合企业的B2B解决方案
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-semibold">作者名称</div>
                <div className="text-sm text-gray-500">技术总监</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <p>
            在数字化转型的浪潮中，选择合适的B2B解决方案对企业的发展至关重要。
            本文将从多个角度分析如何为企业选择最适合的解决方案。
          </p>
          
          <h2>1. 评估企业需求</h2>
          <p>
            首先需要明确企业的具体需求和痛点，包括：
          </p>
          <ul>
            <li>业务流程优化</li>
            <li>成本控制</li>
            <li>效率提升</li>
            <li>客户服务改进</li>
          </ul>

          <h2>2. 技术架构考量</h2>
          <p>
            选择解决方案时需要考虑的技术因素：
          </p>
          <ul>
            <li>系统兼容性</li>
            <li>扩展性</li>
            <li>安全性</li>
            <li>维护成本</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">核心要点</h3>
            <ul>
              <li>明确业务目标</li>
              <li>评估技术需求</li>
              <li>考虑实施成本</li>
              <li>关注售后服务</li>
            </ul>
          </div>
        </div>

        {/* Share & Tags */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {['B2B', '解决方案', '数字化转型'].map((tag, index) => (
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
              title="如何选择适合企业的B2B解决方案" 
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 mt-12 pt-12">
          <h2 className="text-2xl font-bold mb-6">相关文章</h2>
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
                      相关文章标题
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      文章摘要内容...
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