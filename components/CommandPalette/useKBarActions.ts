import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export const useKBarActions = () => {
  const router = useRouter()
  const kBarActions = useMemo(
    () => [
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
        perform: () => router.push('/posts/categories/devbaum'),
      },
      { id: 'openPost', section: 'Most used', name: '⎇ Open Post' },
      {
        id: 'cateogires',
        name: 'Categories',
        section: 'Most used',
        perform: () => router.push('/posts/categories'),
      },
      {
        id: 'tags',
        name: 'Tags',
        section: 'Most used',
        perform: () => router.push('/posts/tags'),
      },
      {
        id: 'posts',
        name: 'All posts',
        section: 'Most used',
        perform: () => router.push('/posts'),
      },
      {
        id: 'projects',
        name: 'My Projects',
        section: 'Most used',
        perform: () => router.push('/projects'),
      },
      {
        id: 'aboutme',
        name: 'About Me',
        section: 'Most used',
        perform: () => router.push('/me'),
      },
    ],
    [router]
  )

  return { kBarActions }
}
