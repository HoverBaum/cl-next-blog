import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
  },
}))

export default makeSource({
  contentDirPath: '.',
  contentDirInclude: ['posts'],
  documentTypes: [Post],
})
