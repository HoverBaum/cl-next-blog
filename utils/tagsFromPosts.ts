import { Post } from 'contentlayer/generated'
import { stringToSlug } from './stringToSlug'

export type TagType = {
  name: string
  slug: string
  // With leading #
  tag: string
  count: number
}

/**
 * Returns a list of all tags from given posts.
 * @param posts The posts to extract tags from.
 * @returns A list of tags sorted by occurance descending.
 */
export const tagsFromPosts = (posts: Post[]): TagType[] => {
  const tagsMaps = posts.reduce((tags, post) => {
    post.tags &&
      post.tags.forEach((tag) => {
        tags[tag] = (tags[tag] || 0) + 1
      })
    return tags
  }, {} as { [key: string]: number })
  const tagNames: string[] = Object.keys(tagsMaps).sort((a, b) => {
    return tagsMaps[b] - tagsMaps[a]
  })
  const tags: TagType[] = tagNames.map((name) => ({
    name,
    slug: `/tags/${stringToSlug(name)}`,
    tag: `# ${name}`,
    count: tagsMaps[name],
  }))
  return tags
}
