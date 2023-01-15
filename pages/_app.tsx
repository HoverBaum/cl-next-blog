import '../styles/globals.css'
import '../styles/variables.css'
import type { AppProps } from 'next/app'
import { Header } from 'components/Header/Header'
import { GlobalStyles } from 'components/GlobalStypes'
import { Footer } from 'components/Footer/Footer'
import { CommandPalette } from 'components/CommandPalette/CommandPalette'
import { KBarProvider } from 'kbar'
import { useKBarActions } from 'components/CommandPalette/kBarActions'
import { useEffect } from 'react'
import { enableCurrentMode } from 'utils/colorMode'

function MyApp({ Component, pageProps }: AppProps) {
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

  const { kBarActions } = useKBarActions()
  return (
    <KBarProvider actions={kBarActions}>
      <GlobalStyles />
      <CommandPalette />
      <Header />
      <div className="mt-10">
        <Component {...pageProps} />
      </div>
      <Footer />
    </KBarProvider>
  )
}

export default MyApp
