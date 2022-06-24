import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from 'components/Header/Header'
import { GlobalStyles } from 'components/GlobalStypes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
