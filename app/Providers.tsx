'use client'

import { useKBarActions } from 'components/CommandPalette/useKBarActions'
import { KBarProvider } from 'kbar'
import { useEffect } from 'react'
import { enableCurrentMode } from 'utils/colorMode'

export function Providers({ children }: { children: React.ReactNode }) {
  const { kBarActions } = useKBarActions()

  useEffect(() => {
    enableCurrentMode()
  }, [])

  // Include tracking on all but localhost.
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      const script = document.createElement('script')
      script.src = 'https://app.neoanalytics.de/neoClient.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  return <KBarProvider actions={kBarActions}>{children}</KBarProvider>
}
