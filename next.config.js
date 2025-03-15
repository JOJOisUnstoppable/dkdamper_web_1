const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos'],
    unoptimized: true
  }
}

module.exports = withContentlayer(nextConfig)
