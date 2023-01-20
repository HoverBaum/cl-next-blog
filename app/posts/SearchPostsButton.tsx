'use client'

import { Button } from 'components/Button'
import { useCommandPalette } from 'components/CommandPalette/useCommandPalette'

export const SearchPostsButton = () => {
  const { toggle } = useCommandPalette()
  const searchPosts = () => {
    toggle('openPost')
  }

  return <Button onClick={searchPosts}>Search Posts</Button>
}
