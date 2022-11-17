import { allPosts } from 'contentlayer/generated'
import { Action } from 'kbar'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { postsByDateDesc } from '../../utils/sort'

export const useKBarActions = () => {
  const router = useRouter()

  const kBarActions: Action[] = useMemo(() => {
    return [
      {
        id: 'home',
        name: 'Home',
        section: 'Most used',
        perform: () => router.push('/'),
      },
      {
        id: 'devbaumPosts',
        name: 'Dev Posts (devbaum)',
        section: 'Most used',
        perform: () => router.push('/categories/devbaum'),
      },
      { id: 'openPost', section: 'Most used', name: '⎇ Open Post' },
      {
        id: 'cateogires',
        name: 'Categories',
        section: 'Most used',
        perform: () => router.push('/categories'),
      },
      {
        id: 'posts',
        name: 'All posts',
        section: 'Most used',
        perform: () => router.push('/posts'),
      },
    ]
      .concat(
        categoriesFromPosts(allPosts).map(({ slug, name }) => ({
          id: slug,
          name,
          section: 'Categories',
          perform: () => router.push(slug),
        }))
      )
      .concat(
        allPosts.sort(postsByDateDesc).map(({ _id, title, slug }) => ({
          id: _id,
          name: title,
          section: 'Posts',
          parent: 'openPost',
          perform: () => router.push(slug),
        }))
      )
  }, [router])
  return { kBarActions }
}
