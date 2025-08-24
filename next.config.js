const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 sitemap.xml 的 rewrite 规则，由 middleware 直接处理
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = withContentlayer(nextConfig)
