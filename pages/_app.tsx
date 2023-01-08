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
