'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/blog/ShareButtons'
import { trackUserBehavior } from '@/utils/analytics'

export default function BlogClientComponents({ post, params }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    // 追踪文章浏览
    trackUserBehavior('article_view', { articleId: params.id })
    
    // 处理浏览次数
    const currentViews = parseInt(localStorage.getItem(`article_${params.id}_views`) || '0')
    setViews(currentViews + 1)
    localStorage.setItem(`article_${params.id}_views`, String(currentViews + 1))
  }, [params.id])

  const handleShare = (platform) => {
    trackUserBehavior('article_share', { articleId: params.id, platform })
  }

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      {/* 标签 */}
      <div className="flex flex-wrap gap-3 mb-6">
        {post.tags?.map((tag, idx) => (
          <Link 
            key={idx} 
            href={`/blog?tag=${tag}`} 
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* 分享按钮和浏览次数 */}
      <div className="flex flex-wrap items-center justify-between">
        <ShareButtons 
          title={post.title} 
          url={typeof window !== 'undefined' ? window.location.href : ''} 
          onShare={handleShare} 
        />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Views: {views}
        </div>
      </div>
    </footer>
  )
}