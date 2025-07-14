import Link from 'next/link'
import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import Accordion from '@/components/common/Accordion'
import BlogClientComponents from '@/components/blog/BlogClientComponents'

// 添加一个生成ID的辅助函数
const generateId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// 为 MDX 内容定义样式化组件
const mdxComponents = {
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
  table: (props) => <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 my-8" {...props} />,
  thead: (props) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
  tbody: (props) => <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props} />,
  tr: (props) => <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" {...props} />,
  th: (props) => <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" {...props} />,
  td: (props) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400" {...props} />,
}

// 动态生成元数据
export async function generateMetadata({ params }) {
  const post = allPosts.find(p => 
    p._raw.flattenedPath === params.id || 
    p._raw.flattenedPath === `posts/${params.id}` ||
    p.id === params.id
  )
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const categoryName = categories.find(c => c.id === post.category)?.name || post.category
  const publishedTime = new Date(post.date).toISOString()

  return {
    title: post.title,
    description: post.excerpt || 'Read our latest insights on linear dampers and hydraulic motion control solutions.',
    keywords: post.tags ? post.tags.join(', ') : 'linear damper, hydraulic damper, motion control, blog',
    // authors: [{ name: post.author || 'Linear Damper Team' }],
    // openGraph: {
    //   title: post.title,
    //   description: post.excerpt,
    //   type: 'article',
    //   publishedTime: publishedTime,
    //   authors: [post.author || 'Linear Damper Team'],
    //   tags: post.tags,
    //   url: `/blog/${params.id}`,
    //   images: post.image ? [
    //     {
    //       url: post.image,
    //       width: 1200,
    //       height: 630,
    //       alt: post.title,
    //     }
    //   ] : undefined,
    // },

    alternates: {
      canonical: `/blog/${params.id}`
    },
    other: {
      'article:published_time': publishedTime,
      'article:author': post.author || 'Linear Damper Team',
      'article:section': categoryName,
      'article:tag': post.tags?.join(',') || '',
    }
  }
}

// 生成静态参数（只为已发布的文章生成）
export async function generateStaticParams() {
  return allPosts
    .filter(post => post.published !== false) // 只为已发布的文章生成静态路径
    .map((post) => ({
      id: post._raw.flattenedPath.replace('posts/', '') || post.id,
    }))
}

export default function BlogDetail({ params }) {
  const post = allPosts.find(p => 
    p._raw.flattenedPath === params.id || 
    p._raw.flattenedPath === `posts/${params.id}` ||
    p.id === params.id
  )
  
  // 检查文章是否存在且已发布
  if (!post || post.published === false) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 文章头部 */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="metadata text-md text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time> • 
            <Link 
              href={`/blog?category=${post.category}`} 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {categories.find(c => c.id === post.category)?.name || post.category}
            </Link>
          </div>
        </header>

        {/* 主要内容区 */}
        <main className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-lg shadow-lg">
          <p className="text-xl italic text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-6 mb-10">
            {post.excerpt}
          </p>

          {/* MDX 内容渲染 */}
          <div className="prose-custom overflow-x-auto">
            <MDXContent components={mdxComponents} />
          </div>

          {/* 客户端组件处理交互功能 */}
          <BlogClientComponents post={post} params={params} />
        </main>
      </div>
    </div>
  )
}