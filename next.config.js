/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '*.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ],
    minimumCacheTTL: 60
  },
  cacheComponents: true,
};

module.exports = nextConfig;
