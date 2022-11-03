/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyjson.com'],
  },
}

module.exports = nextConfig
