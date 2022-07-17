/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.ulatroi.net'],
  },
  experimental: {
    images: {
        layoutRaw: true,
        allowFutureImage: true
    }
},
}

module.exports = nextConfig
