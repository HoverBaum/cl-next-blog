import { Emoji } from 'components/Emoji'
import { headerLinks, NavLink } from 'components/Header/Header'
import { Search } from 'components/Icons/Search'
import { Wrapper } from 'components/Wrapper'
import { useKBar } from 'kbar'
import Link from 'next/link'

const footerLinks: NavLink[] = [
  ...headerLinks,
  { href: '/posts/tags', title: 'Tags' },
  { href: '/posts/categories', title: 'Categories' },
  { href: 'https://hendrikwallbaum.de/impressum.html', title: 'Impressum' },
]

export const Footer = () => {
  const { query } = useKBar()
  return (
    <footer className="mt-[5vh] py-6 bg-surface dark:bg-surface-dark border-t-2 border-t-border dark:border-t-border-dark">
      <Wrapper>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-1">Links</h4>

            <ul className="grid md:grid-cols-2 p-0 list-none">
              {footerLinks.map(({ href, title }) => (
                <li key={href + title} className="mb-1">
                  <Link href={href}>
                    <a className="no-underline hover:underline">{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1">Search</h4>
            <div className="relative flex items-center w-full h-8 rounded-lg bg-background dark:bg-background-dark overflow-hidden border border-border">
              <div className="grid place-items-center h-full w-12 text-text dark:text-text-dark">
                <Search className="h-6 w-6" />
              </div>

              <input
                // You can't tab this!
                tabIndex={-1}
                className="peer h-full w-full outline-none text-sm bg-surface dark:bg-surface-dark text-text dark:text-text-dark px-2"
                type="text"
                id="search"
                placeholder="Search something... (cmd + K)"
                onClick={(e) => {
                  //@ts-ignore
                  e.target.blur()
                  query.toggle()
                }}
              />
            </div>
          </div>
        </div>

        <p className="text-center">
          <small>
            Created with <Emoji>🎉</Emoji> by{' '}
            <Link href="/me">Hendrik Wallbaum</Link>
          </small>
        </p>
      </Wrapper>
    </footer>
  )
}
