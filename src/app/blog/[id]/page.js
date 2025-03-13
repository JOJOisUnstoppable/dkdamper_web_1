import Link from 'next/link'
import ShareButtons from '@/components/blog/ShareButtons'

export default function BlogDetail({ params }) {
  return (
    <div className="min-h-screen py-20">
      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>2024-01-01</span>
            <span>•</span>
            <Link href="/blog?category=tech" className="text-primary hover:text-secondary">
              技术动态
            </Link>
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
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">B2B</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">解决方案</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">数字化转型</span>
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