import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

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

// 新增 Post 文档类型
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx', // 统一只处理.mdx文件
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    id: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: false }, // 可选的封面图片
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('posts/', '')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Product, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})