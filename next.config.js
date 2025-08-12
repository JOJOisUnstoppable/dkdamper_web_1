const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:locale/sitemap.xml', // 多语言sitemap路径
        destination: '/:locale/api/sitemap', // 匹配带locale的API路由
      },
    ];
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = withContentlayer(nextConfig)
