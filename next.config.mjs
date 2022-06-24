import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
})
