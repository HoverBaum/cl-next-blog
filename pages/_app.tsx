/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'components/Header/Header'
import { GlobalStyles } from 'components/GlobalStypes'
import { css } from '@emotion/react'
import { Footer } from 'components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div
        css={css`
          padding-bottom: 2rem;
        `}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
