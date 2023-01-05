import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { bundleMDX } from 'mdx-bundler'
import highlight from 'rehype-highlight'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post.',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post.',
      required: true,
    },
    categories: {
      type: 'list',
      of: { type: 'string' },
      description: 'High level post organisation.',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description:
        'Keywords that add context to a post and help reads to find similar.',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) =>
        `/posts/${post.title
          .replace(/\s/g, '-')
          .toLowerCase()
          .replace('ä', 'ae')}`,
    },
    excerpt: {
      type: 'json',
      resolve: async (post) => {
        // Take the first paragraph of the content.
        // But at least 300 words and only full paragraphs.
        // We split on empty and not new lines.
        const lines = post.body.raw
          .replace(/\r\n/g, '\n')
          .split('\n\n')
          .filter((line) => line !== '')
        const excerpt = lines.reduce((acc, line) => {
          if (/\!\[.+?\]\(.+?\)/.test(line)) return acc
          if (acc.join(' ').length > 300) {
            return acc
          } else return acc.concat(line)
        }, [])
        const excerptMDX = excerpt.join('\n\n')
        const compiledExcerpt = await bundleMDX({
          source: excerptMDX,
        })
        return compiledExcerpt
      },
    },
    firstImage: {
      type: 'json',
      resolve: (post) => {
        const lines = post.body.raw.split('\n\n').filter((line) => line !== '')
        const firstImage = lines.find((line) => /\!\[.+?\]\(.+?\)/.test(line))
        if (!firstImage) return
        // Extract image link and alt text from markdown image.
        const src = firstImage.match(/\!\[(.+?)\]\((.+?)\)/)[2]
        const alt = firstImage.match(/\!\[(.+?)\]\((.+?)\)/)[1]
        return { src, alt }
      },
    },
  },
}))

export default makeSource({
  contentDirPath: '.',
  contentDirInclude: ['posts'],
  documentTypes: [Post],
  // We use highlighting hjere to have it run once at build and not during runtime.
  mdx: { rehypePlugins: [highlight] },
})
