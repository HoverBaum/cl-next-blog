import { withContentlayer } from 'next-contentlayer'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { oldBlogRedirects } from './scripts/redirects.mjs'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default bundleAnalyzer(
  withContentlayer({
    reactStrictMode: true,
    images: {
      domains: ['storage.googleapis.com'],
    },
    experimental: {
      appDir: true,
    },
    redirects: () => {
      return oldBlogRedirects
    },
  })
)
