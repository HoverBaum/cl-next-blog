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
    <html lang="en">
      <head>
        {/* We will optimistically switch to dark mode for systemt that prefer it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark')
        `,
          }}
        />
        <title key="title">HoverBaum</title>
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
