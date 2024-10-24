import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/noticias/categoria',
        destination: '/noticias',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
