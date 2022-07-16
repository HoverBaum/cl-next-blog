/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'components/Header/Header'
import { GlobalStyles } from 'components/GlobalStypes'
import { css } from '@emotion/react'
import 'highlight.js/styles/atom-one-dark.css'

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
    </>
  )
}

export default MyApp
