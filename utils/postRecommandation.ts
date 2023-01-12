import { Post } from 'contentlayer/generated'
import { postsByDateDesc } from './sort'

/**
 * Calculates a score representing how relevant the second post is to the first.
 * We prioritise tags over categories, assuming that they mean much fore for the
 * two posts relation than the category.
 * @param post
 * @param secondPost
 * @returns
 */
const relevanceScore = (post: Post, secondPost: Post) => {
  // Return a negative number for the same post to make sure it ranks last.
  if (post._id === secondPost._id) return -1000
  const postTags = post.tags || []
  const postCategories = post.categories || []
  let score = 0

  secondPost.tags?.forEach((tag) => {
    if (postTags.includes(tag)) score += 1
  })
  secondPost.categories?.forEach((category) => {
    if (postCategories.includes(category)) score += 0.5
  })

  return score
}

/**
 * Recommand posts to read next from a list of posts.
 * Similar posts are identified through matching categories and tags.
 * Some of the most recent posts are mixed in to encourage up to date reading.
 * This is to be used as "related posts" at the bottom of posts.
 * @param primaryPost Current post to find related posts to.
 * @param posts List of posts to find related posts in.
 */
export const recommandedPosts = (primaryPost: Post, posts: Post[]) => {
  const recommandedPosts = posts
    .sort(postsByDateDesc)
    .map((post) => ({
      relevanceScore: relevanceScore(primaryPost, post),
      ...post,
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 2) as Post[]

  // Find the most recent post, not yet recommanded.
  const recentPost = posts
    .sort(postsByDateDesc)
    .find(
      (post) =>
        post._id !== primaryPost._id &&
        !recommandedPosts.find((p) => p._id === post._id)
    )
  if (recentPost) recommandedPosts.push(recentPost)
  return recommandedPosts
}
