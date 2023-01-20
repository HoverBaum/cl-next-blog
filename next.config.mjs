import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: {
    appDir: true,
  },
})
