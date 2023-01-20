'use client'

import { useKBar } from 'kbar'

export const useCommandPalette = () => {
  const { query } = useKBar()

  const openKBar = (parentAction?: string) => {
    query.toggle()
    if (parentAction) query.setCurrentRootAction(parentAction)
  }

  return {
    openKBar,
  }
}
