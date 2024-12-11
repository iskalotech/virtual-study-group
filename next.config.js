/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
