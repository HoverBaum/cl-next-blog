'use client'

import { useKBarActions } from 'components/CommandPalette/kBarActions'
import { KBarProvider } from 'kbar'

export function Providers({ children }: { children: React.ReactNode }) {
  const { kBarActions } = useKBarActions()

  return <KBarProvider actions={kBarActions}>{children}</KBarProvider>
}
