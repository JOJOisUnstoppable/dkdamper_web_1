const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // 移除 experimental.appDir，因为 App Router 现在已经是默认功能
}

module.exports = withContentlayer(nextConfig)
