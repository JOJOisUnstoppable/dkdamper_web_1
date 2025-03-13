import Link from 'next/link'

export default function BlogPage() {
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
            <button className="px-4 py-2 bg-primary text-white rounded-lg">全部</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">技术动态</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">行业资讯</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">解决方案</button>
            <button className="px-4 py-2 bg-white hover:bg-gray-100 rounded-lg">客户案例</button>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary px-3 py-1 bg-primary/10 rounded-full">技术动态</span>
                    <span className="text-sm text-gray-500">2024-01-01</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">文章标题</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    这里是文章摘要，简要介绍文章的主要内容和核心观点...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-600">作者名称</span>
                    </div>
                    <Link 
                      href={`/blog/${item}`}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">上一页</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">2</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">3</button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100">下一页</button>
          </div>
        </div>
      </section>
    </div>
  )
}