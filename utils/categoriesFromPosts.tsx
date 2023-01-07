import { Post } from 'contentlayer/generated'
import { stringToSlug } from './stringToSlug'

export type CategoryType = {
  name: string
  count: number
  slug: string
}

/**
 * Extract all categories from a list of posts.
 * @param posts Posts to extract categories from.
 * @returns List of caregories, sorted by count descending.
 */
export const categoriesFromPosts = (posts: Post[]) => {
  const categories = posts.reduce((acc, post) => {
    if (post.categories) {
      post.categories.forEach((category) => {
        if (!acc[category]) {
          acc[category] = {
            name: category,
            count: 0,
            slug: `/posts/categories/${stringToSlug(category)}`,
          }
        }
        acc[category].count++
      })
    }
    return acc
  }, {} as Record<string, CategoryType>)
  return Object.values(categories).sort((a, b) => b.count - a.count)
}
