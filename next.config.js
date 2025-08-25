const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 sitemap.xml 的 rewrite 规则，由 middleware 直接处理
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // 确保静态资源使用正确的路径
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://lineardamper.com' : '',
}

module.exports = withContentlayer(nextConfig)
