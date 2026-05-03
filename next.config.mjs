import withBundleAnalyzer from '@next/bundle-analyzer'
import { oldBlogRedirects } from './scripts/redirects.mjs'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default bundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  redirects: () => {
    return oldBlogRedirects
  },
})
