'use client'
import { useState, useEffect } from 'react'

export default function AnalyticsPage() {
  const [events, setEvents] = useState([])
  const [hotContent, setHotContent] = useState({
    articles: [],
    categories: [],
    tags: []
  })

  useEffect(() => {
    const userEvents = JSON.parse(localStorage.getItem('user_events') || '[]')
    setEvents(userEvents)

    // 分析热门内容
    const analysis = analyzeHotContent(userEvents)
    setHotContent(analysis)
  }, [])

  const analyzeHotContent = (events) => {
    const articles = {}
    const categories = {}
    const tags = {}

    events.forEach(event => {
      if (event.action === 'article_view') {
        const { articleId } = event.data
        articles[articleId] = (articles[articleId] || 0) + 1
      }
      if (event.action === 'category_filter') {
        const { category } = event.data
        categories[category] = (categories[category] || 0) + 1
      }
      if (event.action === 'tag_filter') {
        const { tag } = event.data
        tags[tag] = (tags[tag] || 0) + 1
      }
    })

    return {
      articles: Object.entries(articles)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5),
      categories: Object.entries(categories)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5),
      tags: Object.entries(tags)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">数据分析</h1>

        {/* 热门内容分析 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">热门文章</h2>
            <div className="space-y-4">
              {hotContent.articles.map(([id, count]) => (
                <div key={id} className="flex justify-between items-center">
                  <span>文章 {id}</span>
                  <span className="text-primary">{count} 次访问</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">热门分类</h2>
            <div className="space-y-4">
              {hotContent.categories.map(([category, count]) => (
                <div key={category} className="flex justify-between items-center">
                  <span>{category}</span>
                  <span className="text-primary">{count} 次点击</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">热门标签</h2>
            <div className="space-y-4">
              {hotContent.tags.map(([tag, count]) => (
                <div key={tag} className="flex justify-between items-center">
                  <span>{tag}</span>
                  <span className="text-primary">{count} 次点击</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 原有的事件列表 */}
        <h2 className="text-2xl font-bold mb-4">用户行为记录</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">行为</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">页面</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">数据</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((event, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(event.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {event.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.url}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {JSON.stringify(event.data)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}