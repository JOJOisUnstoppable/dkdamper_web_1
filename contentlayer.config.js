import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math' // 导入 remark-math
import rehypeKatex from 'rehype-katex' // 导入 rehype-katex

export const Product = defineDocumentType(() => ({
  name: 'Product',
  filePathPattern: 'products/*.mdx',
  fields: {
    id: { type: 'number', required: true },
    name: { type: 'string', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false },
    specs: { type: 'json', required: true },
    features: { type: 'list', of: { type: 'string' }, required: true },
    origin: { type: 'string', required: false },
    advantages: {
      type: 'list',
      of: { type: 'json' },
      required: false
    },
    cases: {
      type: 'list',
      of: { type: 'json' },
      required: false
    },
    specs_detail: { type: 'json', required: false },
    // 添加新字段
    integrations: {
      type: 'list',
      of: { type: 'json' },
      required: false
    },
    modules: {
      type: 'list',
      of: { type: 'json' },
      required: false
    }
  }
}))

// 新增 Post（blog） 文档类型
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    id: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: false },
    published: { type: 'boolean', required: false, default: true }, // 新增发布状态字段
  },
  computedFields: {
    lang: {
      type: 'string',
      resolve: (post) => {
        const pathParts = post._raw.sourceFilePath.split('/')
        // 语言目录在 "posts" 之后，如 "posts/en/xxx.mdx" 中索引为 1 的是 "en"
        const langIndex = pathParts.indexOf('posts') + 1
        return pathParts[langIndex] || 'en' // 默认英文
      },
    },
    url: {
      type: 'string',
      resolve: (post) => `/${post.lang}/blog/${post.id}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Product, Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath], // 添加 remarkMath
    rehypePlugins: [rehypeKatex], // 添加 rehypeKatex
  },
})