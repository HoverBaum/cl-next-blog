import { Emoji } from 'components/Emoji'
import { headerLinks, NavLink } from 'components/Header/headerLinks'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { FooterSearch } from './FooterSearch'

const footerLinks: NavLink[] = [
  ...headerLinks,
  { href: '/posts/tags', title: 'Tags' },
  { href: '/posts/categories', title: 'Categories' },
  { href: '/projects', title: 'Projects' },
  { href: 'https://hendrikwallbaum.de/impressum.html', title: 'Impressum' },
]

export const Footer = () => {
  // const { query } = useKBar()
  return (
    <footer className="mt-[5vh] py-6 bg-surface dark:bg-surface-dark border-t-2 border-t-border dark:border-t-border-dark">
      <Wrapper>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-1">Links</h4>

            <ul className="grid md:grid-cols-2 p-0 list-none">
              {footerLinks.map(({ href, title }) => (
                <li key={href + title} className="mb-1">
                  <Link href={href} className="no-underline hover:underline">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1">Search</h4>

            <FooterSearch />
          </div>
        </div>

        <p className="text-center mb-0 mt-6">
          <small>
            Created with <Emoji>🎉</Emoji> by{' '}
            <Link href="/me">Hendrik Wallbaum</Link>
          </small>
        </p>
        <p className="text-center mt-0">
          <small>
            Feedback about this site or any post?{' '}
            <a href="/me#contact">Reach Out!</a>
          </small>
        </p>
      </Wrapper>
    </footer>
  )
}
