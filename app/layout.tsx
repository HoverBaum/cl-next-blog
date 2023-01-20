import { CommandPalette } from 'components/CommandPalette/CommandPalette'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'

import '../styles/globals.css'
import { Providers } from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CommandPalette />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
