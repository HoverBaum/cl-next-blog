'use client'

import { Button } from 'components/Button'
import { useCommandPalette } from 'components/CommandPalette/useCommandPalette'

export const SearchPostsButton = () => {
  const { openKBar } = useCommandPalette()
  const searchPosts = () => {
    openKBar('openPost')
  }

  return <Button onClick={searchPosts}>Search Posts</Button>
}
