/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: [] } },
    ],
  },
  images: {
    domains: ['dummyjson.com', 'moonshire.infura-ipfs.io', 'bpwdpdrdsuhpgevetixn.supabase.co'],
  },
}

module.exports = nextConfig
