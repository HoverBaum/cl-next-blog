import { Title } from 'components/baum-ui'
import { Breadcrums } from 'components/Breadcrums'
import { Ruler } from 'components/Ruler'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type NavLink = {
  href: string
  title: string
}

export const headerLinks: NavLink[] = [
  {
    href: '/categories/devbaum',
    title: 'Dev posts',
  },
  { href: '/posts', title: 'Posts' },
  { href: '/tags', title: 'Tags' },
  { href: '/categories', title: 'Categories' },
]

export const Header = () => {
  const router = useRouter()
  const isHomepage = router.pathname === '/'

  return (
    <header className="mb-[10vh]">
      <Wrapper>
        <hgroup>
          {isHomepage && (
            <Title>
              <Link href="/">Hendriks Blog</Link>
            </Title>
          )}
          {!isHomepage && (
            <h2 className="font-simonetta text-primary dark:text-primary-dark">
              <Link href="/">Hendriks Blog</Link>
            </h2>
          )}

          <h4 className="font-noto font-light mt-1">
            Ein Baum und seine Abenteuer
          </h4>
        </hgroup>
        <nav>
          <ul className="flex flex-wrap p-0 list-none">
            {headerLinks.map(({ href, title }) => (
              <li key={href + title} className="mr-4">
                <Link href={href}>
                  <a className="uppercase no-underline hover:underline">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {!isHomepage && (
          <>
            <Ruler />
            <div className="mt-1">
              <Breadcrums />
            </div>
          </>
        )}
      </Wrapper>
    </header>
  )
}
