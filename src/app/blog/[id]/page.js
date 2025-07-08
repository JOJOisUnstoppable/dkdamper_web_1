'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import ShareButtons from '@/components/blog/ShareButtons'
import { trackUserBehavior } from '@/utils/analytics'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import Accordion from '@/components/common/Accordion'

// 动态导入 LottiePlayer
const LottiePlayer = dynamic(() => import('@/components/common/LottiePlayer'), { ssr: false })

// 添加一个生成ID的辅助函数
const generateId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // 移除特殊字符，保留字母、数字、空格和连字符
    .replace(/\s+/g, '-') // 将空格替换为连字符
    .replace(/-+/g, '-') // 将多个连字符合并为一个
    .trim()
}

// 为 MDX 内容定义样式化组件
const mdxComponents = {
  LottiePlayer,
  Image,
  Accordion,
  h1: (props) => {
    const id = props.children ? generateId(props.children.toString()) : ''
    return <h1 id={id} className="text-4xl font-bold text-gray-900 dark:text-white mb-6" {...props} />
  },
  h2: (props) => {
    const id = props.children ? generateId(props.children.toString()) : ''
    return <h2 id={id} className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-10 mb-4 border-b pb-2" {...props} />
  },
  h3: (props) => {
    const id = props.children ? generateId(props.children.toString()) : ''
    return <h3 id={id} className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-8 mb-4" {...props} />
  },
  p: (props) => <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-6 pl-4 text-lg text-gray-700 dark:text-gray-300" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-6 pl-4 text-lg text-gray-700 dark:text-gray-300" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  a: (props) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
  // 修复表格渲染问题 - 不要包装在div中
  table: (props) => <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 my-8" {...props} />,
  thead: (props) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
  tbody: (props) => <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props} />,
  tr: (props) => <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" {...props} />,
  th: (props) => <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" {...props} />,
  td: (props) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400" {...props} />,
}

export default function BlogDetail({ params }) {
  const post = allPosts.find(p => p._raw.flattenedPath === params.id || p._raw.flattenedPath === `posts/${params.id}`)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  useEffect(() => {
    trackUserBehavior('article_view', { articleId: params.id })
  }, [params.id])

  const handleShare = platform => {
    trackUserBehavior('article_share', { articleId: params.id, platform })
  }

  const [views, setViews] = useState(0)
  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem(`article_${params.id}_views`) || '0')
    setViews(currentViews + 1)
    localStorage.setItem(`article_${params.id}_views`, String(currentViews + 1))
  }, [params.id])

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 文章头部 */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">{post.title}</h1>
          <div className="metadata text-md text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> • 
            <Link href={`/blog?category=${post.category}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {categories.find(c => c.id === post.category)?.name || post.category}
            </Link>
          </div>
        </header>

        {/* 主要内容区 */}
        <main className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-lg shadow-lg">
          <p className="text-xl italic text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-6 mb-10">{post.excerpt}</p>

          {/* MDX 内容渲染，支持自定义组件 */}
          <div className="prose-custom overflow-x-auto">
            <MDXContent components={mdxComponents} />
          </div>

          {/* 分享和标签 */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {post.tags?.map((tag, idx) => (
                <Link key={idx} href={`/blog?tag=${tag}`} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
            <ShareButtons title={post.title} url={typeof window !== 'undefined' ? window.location.href : ''} onShare={handleShare} />
          </footer>
        </main>
      </div>
    </div>
  )
}