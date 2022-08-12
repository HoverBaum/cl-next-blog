/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'components/Header/Header'
import { GlobalStyles } from 'components/GlobalStypes'
import { css } from '@emotion/react'
import { Footer } from 'components/Footer/Footer'
import { CommandPalette } from 'components/CommandPalette/CommandPalette'
import { KBarProvider } from 'kbar'
import { useKBarActions } from 'components/CommandPalette/kBarActions'

function MyApp({ Component, pageProps }: AppProps) {
  const { kBarActions } = useKBarActions()
  return (
    <KBarProvider actions={kBarActions}>
      <GlobalStyles />
      <CommandPalette />
      <Header />
      <div
        css={css`
          padding-bottom: 2rem;
        `}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
    </KBarProvider>
  )
}

export default MyApp
