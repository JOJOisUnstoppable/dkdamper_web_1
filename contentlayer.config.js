import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Product = defineDocumentType(() => ({
  name: 'Product',
  filePathPattern: 'products/*.md',
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

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Product]
})