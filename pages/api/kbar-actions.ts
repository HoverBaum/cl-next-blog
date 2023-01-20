import { allPosts } from 'contentlayer/generated'
import type { NextApiRequest, NextApiResponse } from 'next'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { postsByDateDesc } from 'utils/sort'
import { tagsFromPosts } from 'utils/tagsFromPosts'

export type BackendKBarAction = {
  id: string
  name: string
  section: string
  type: 'navigation'
  href: string
  parent?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
      allPosts.sort(postsByDateDesc).map(({ _id, title, slug }) => ({
        id: _id,
        name: title,
        section: 'Posts',
        parent: 'openPost',
        type: 'navigation',
        href: slug,
      }))
    ) as BackendKBarAction[]
  res.status(200).json(actions)
}
