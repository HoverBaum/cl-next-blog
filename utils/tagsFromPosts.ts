import { Post } from 'contentlayer/generated'
import { stringToSlug } from './stringToSlug'

export type TagType = {
  name: string
  slug: string
  // With leading #
  tag: string
  count: number
  tagSlug: string
}

/**
 * Returns a list of all tags from given posts.
 * @param posts The posts to extract tags from.
 * @returns A list of tags sorted by occurance descending.
 */
export const tagsFromPosts = (posts: Post[]): TagType[] => {
  const tags = posts.reduce((acc, post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = {
            name: tag,
            count: 0,
            tagSlug: stringToSlug(tag),
            slug: `/posts/tags/${stringToSlug(tag)}`,
            tag: `# ${tag}`,
          }
        }
        acc[tag].count++
      })
    }
    return acc
  }, {} as Record<string, TagType>)
  return Object.values(tags).sort((a, b) => b.count - a.count)
}
