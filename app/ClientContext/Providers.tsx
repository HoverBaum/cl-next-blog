'use client'

import { BlogAction } from 'components/CommandPalette/generateBlogActions'
import { useKBarActions } from 'components/CommandPalette/useKBarActions'
import { KBarProvider } from 'kbar'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { ColorModeProvider } from './ColorMode/ColorModeContext'

export function Providers({
  children,
  blogActions,
}: {
  children: React.ReactNode
  blogActions: BlogAction[]
}) {
  const { kBarActions } = useKBarActions()
  const router = useRouter()
  const allActions = useMemo(
    () => [
      ...kBarActions,
      ...blogActions.map((action) => ({
        ...action,
        perform: () => router.push(action.href),
      })),
    ],
    [kBarActions]
  )

  // Include tracking only on prod.
  useEffect(() => {
    if (window.location.hostname === 'hoverbaum.net') {
      const script = document.createElement('script')
      script.src = 'https://app.neoanalytics.de/neoClient.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <ColorModeProvider>
      <KBarProvider actions={allActions}>{children}</KBarProvider>
    </ColorModeProvider>
  )
}
