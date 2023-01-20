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

  // // Load more actions async so that initial package stays small.
  // // This includes all post, categories and tags.
  // useEffect(() => {
  //   console.log('effect')
  //   const fetchMoreActions = async () => {
  //     const moreActions = await fetch('/api/kbar-actions')
  //     const moreActionsJson = (await moreActions.json()) as BackendKBarAction[]
  //     setKBarActions((prevActions) => [
  //       ...prevActions,
  //       ...moreActionsJson.map((action) => ({
  //         ...action,
  //         perform: () => router.push(action.href),
  //       })),
  //     ])
  //   }
  //   fetchMoreActions()
  // }, [])

  return { kBarActions }
}
