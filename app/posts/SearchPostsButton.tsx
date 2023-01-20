'use client'

import { Button } from 'components/Button'
import { useKBar } from 'kbar'

export const SearchPostsButton = () => {
  const { query } = useKBar()
  const searchPosts = () => {
    query.toggle()
    query.setCurrentRootAction('openPost')
  }

  return <Button onClick={searchPosts}>Search Posts</Button>
}
