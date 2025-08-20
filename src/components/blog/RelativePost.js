import Link from 'next/link'
import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'

// 获取最新的3篇已发布博客文章
function getLatestPosts(currentPostId = null, limit = 3, locale = 'en') {
  return allPosts
    .filter(post => {
      // 过滤已发布的文章，排除当前文章，并根据语言过滤
      const isPublished = post.published !== false
      const isNotCurrent = currentPostId ? post.id !== currentPostId : true
      const isCorrectLanguage = post.lang === locale
      return isPublished && isNotCurrent && isCorrectLanguage
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // 按日期降序排列
    .slice(0, limit) // 取前3篇
}

export default function RelatedPosts({ 
  title = "Latest Articles", 
  currentPostId = null,
  limit = 3,
  locale = 'en' // 添加 locale 参数
}) {
  const posts = getLatestPosts(currentPostId, limit, locale) // 传递 locale 参数

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={post.image || '/images/blog/cover-default.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                      Blog
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.author || 'Admin'}
                    </span>
                    <span className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 导出命名函数以保持向后兼容
export { RelatedPosts }