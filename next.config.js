/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p01--shaky-order--r2rc7gm4p8zj.code.run',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
