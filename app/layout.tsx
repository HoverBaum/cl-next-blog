import { CommandPalette } from 'components/CommandPalette/CommandPalette'
import { generateBlogActions } from 'components/CommandPalette/generateBlogActions'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'

import '../styles/globals.css'
import { Providers } from './ClientContext/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // This has a class to make identifying the warning mentioned below easier…
    <html lang="en" className="htmlClass">
      <head>
        {/**
         * Initially set color mode on html element.
         * This causes a "Extra attributes from the server: class" warning in dev!
         * We will optimistically switch to dark mode for systems that prefer it.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const storedMode = localStorage.theme
            if(!!storedMode) {
              document.documentElement.classList.add(storedMode)
            } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.classList.add('dark')
            }
        `,
          }}
        />
      </head>
      <body>
        <Providers blogActions={generateBlogActions()}>
          <CommandPalette />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
