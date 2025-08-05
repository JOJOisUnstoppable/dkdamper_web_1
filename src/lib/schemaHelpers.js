/**
 * 生成网站全局基础 Schema 数据
 * @param {Object} options - 网站信息配置
 * @returns {Object} 结构化数据
 */
export const generateWebsiteSchema = (options) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${options.baseUrl}#website`,
      'name': options.siteName,
      'url': options.baseUrl,
      'description': options.description,
      'publisher': {
        '@type': 'Organization',
        '@id': `${options.baseUrl}#organization`
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${options.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'Organization',
      '@id': `${options.baseUrl}#organization`,
      'name': options.orgName,
      'url': options.baseUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${options.baseUrl}${options.logoPath}`,
        'width': options.logoWidth || 600,
        'height': options.logoHeight || 100
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': options.phone,
        'contactType': 'customer service',
        'availableLanguage': options.languages || ['English', 'Chinese']
      },
      'sameAs': options.socialLinks || []
    }
  ]
});

/**
 * 生成产品详情页 Schema 数据
 * @param {Object} product - 产品信息
 * @param {string} baseUrl - 网站基础 URL
 * @returns {Object} 结构化数据
 */
export const generateProductSchema = (product, baseUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': product.name,
  'image': product.image ? `${baseUrl}${product.image}` : `${baseUrl}/images/product-placeholder.jpg`,
  'description': product.description,
  'sku': product.sku || product.id,
  'mpn': product.mpn || product.id,
  'brand': {
    '@type': 'Brand',
    'name': product.brand || 'DK Machinery'
  },
  'category': product.category,
  'additionalProperty': Object.entries(product.specs).map(([key, value]) => ({
    '@type': 'PropertyValue',
    'name': key,
    'value': typeof value === 'object' ? value.value : value
  })),
  'offers': {
    '@type': 'Offer',
    'url': `${baseUrl}/products/${product.id}`,
    'availability': 'https://schema.org/InStock',
    'priceCurrency': product.priceCurrency || 'USD',
    'price': product.price || 'Contact for quote',
    'itemCondition': 'https://schema.org/NewCondition'
  },
  ...(product.rating && {
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': product.rating.value,
      'reviewCount': product.rating.count
    }
  })
});

/**
 * 生成博客文章 Schema 数据
 * @param {Object} post - 文章信息
 * @param {string} baseUrl - 网站基础 URL
 * @returns {Object} 结构化数据
 */
export const generateBlogSchema = (post, baseUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  'headline': post.title,
  'description': post.excerpt || 'Technical insights on linear dampers',
  'image': post.image ? `${baseUrl}${post.image}` : `${baseUrl}/social-banner.png`,
  'datePublished': new Date(post.date).toISOString(),
  'dateModified': post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.date).toISOString(),
  'author': {
    '@type': 'Person',
    'name': post.author || 'DK Machinery Team'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'DK Machinery',
    'logo': {
      '@type': 'ImageObject',
      'url': `${baseUrl}/logo.png`
    }
  },
  'articleSection': post.category,
  'keywords': post.tags ? post.tags.join(', ') : 'linear damper, hydraulic damper',
  // 修复：使用 excerpt 或 body.raw 的前500个字符
  'articleBody': post.excerpt || (post.body?.raw ? post.body.raw.substring(0, 500) + '...' : 'Technical article content')
});

/**
 * 生成解决方案页面 Schema 数据
 * @param {Object} solution - 解决方案信息
 * @param {string} baseUrl - 网站基础 URL
 * @returns {Object} 结构化数据
 */
export const generateSolutionSchema = (solution, baseUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': solution.title,
  'description': solution.description,
  'image': solution.image ? `${baseUrl}${solution.image}` : `${baseUrl}/images/solution-placeholder.jpg`,
  'datePublished': solution.publishedAt ? new Date(solution.publishedAt).toISOString() : new Date().toISOString(),
  'author': {
    '@type': 'Organization',
    'name': 'DK Machinery'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'DK Machinery',
    'logo': {
      '@type': 'ImageObject',
      'url': `${baseUrl}/logo.png`
    }
  },
  'articleSection': 'Solutions',
  'keywords': solution.tags ? solution.tags.join(', ') : 'damper solutions, industrial applications'
});


/**
 * 生成产品列表页 Schema 数据
 * @param {Object} options - 列表配置
 * @param {Array} products - 产品列表数据
 * @returns {Object} 结构化数据
 */
export const generateProductListSchema = (options, products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": options.listName,
  "description": options.description
});