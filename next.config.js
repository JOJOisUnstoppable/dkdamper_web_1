const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    // 如果需要的话，可以添加其他配置
  },
}

module.exports = withContentlayer(nextConfig)
