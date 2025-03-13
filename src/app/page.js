import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            专业的B2B解决方案
          </h1>
          <p className="text-xl mb-8">
            为您的企业提供全方位的解决方案
          </p>
          <Link href="/404" className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            了解更多
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">精选产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md group hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">产品名称</h3>
                <p className="text-gray-600 mb-4">产品简短描述</p>
                <Link 
                  href={`/products/${item}`} 
                  className="text-primary group-hover:text-secondary transition-colors inline-flex items-center"
                >
                  查看详情 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/products" 
              className="inline-flex items-center text-primary hover:text-secondary transition-colors"
            >
              查看更多产品
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">行业解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-primary rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">解决方案标题</h3>
                  <p className="text-gray-600">
                    详细的解决方案描述，包含主要特点和优势。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">关于我们</h2>
              <p className="text-gray-600 mb-6">
                我们是行业领先的B2B解决方案提供商，致力于为企业提供创新、高效的解决方案。
              </p>
              <Link href="/404" className="text-primary hover:text-secondary">
                了解更多 →
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* News/Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">最新动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">文章标题</h3>
                <p className="text-gray-600 mb-4">文章摘要内容...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2024-01-01</span>
                  <Link href="/404" className="text-primary hover:text-secondary">
                    阅读更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
