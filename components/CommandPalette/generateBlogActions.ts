import 'server-only'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { getAllPosts } from 'utils/blogPosts'
import { postsByDateDesc } from 'utils/sort'
import { tagsFromPosts } from 'utils/tagsFromPosts'

export type BlogAction = {
  id: string
  name: string
  section: string
  type: 'navigation'
  href: string
  parent?: string
}

export const generateBlogActions = async () => {
  const allPosts = await getAllPosts()
  const sortedPosts = [...allPosts].sort(postsByDateDesc)
  const actions = categoriesFromPosts(allPosts)
    .map(({ slug, name }) => ({
      id: slug,
      name,
      section: 'Categories',
      type: 'navigation',
      href: slug,
    }))
    .concat(
      tagsFromPosts(allPosts).map(({ slug, name }) => ({
        id: slug,
        name,
        section: 'Tags',
        href: slug,
        type: 'navigation',
      }))
    )
    .concat(
      sortedPosts.map(({ _id, title, slug }) => ({
        id: _id,
        name: title,
        section: 'Posts',
        parent: 'openPost',
        type: 'navigation',
        href: slug,
      }))
    ) as BlogAction[]
  return actions
}
