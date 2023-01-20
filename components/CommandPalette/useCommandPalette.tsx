'use client'

// TODO: to improve this it should be global context.
// That way we can reduce backend calls that we do.

import { useKBar } from 'kbar'
import { useRouter } from 'next/navigation'
import { BackendKBarAction } from 'pages/api/kbar-actions'

export const useCommandPalette = () => {
  const router = useRouter()
  const { query } = useKBar()
  const actions = useKBar((state) => state.actions)

  const getAllActions = async () => {
    const moreActions = await fetch('/api/kbar-actions')
    const moreActionsJson = (await moreActions.json()) as BackendKBarAction[]
    const backendActions = moreActionsJson.map((action) => ({
      ...action,
      perform: () => router.push(action.href),
    }))

    // Filter out all actions that have already been added by another call to this code.
    const newActions = backendActions.filter((action) => !actions[action.id])
    query.registerActions(newActions)
  }

  const toggle = (parentAction?: string) => {
    query.toggle()
    if (parentAction) query.setCurrentRootAction(parentAction)
    getAllActions()
  }

  return {
    toggle,
  }
}
