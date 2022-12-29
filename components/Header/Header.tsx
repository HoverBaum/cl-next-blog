import { Title } from 'components/baum-ui'
import { Breadcrums } from 'components/Breadcrums'
import { Ruler } from 'components/Ruler'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export type NavLink = {
  href: string
  title: string
}

export const headerLinks: NavLink[] = [
  {
    href: '/',
    title: 'Home',
  },
  { href: '/posts', title: 'Posts' },
  { href: '/tags', title: 'Tags' },
  { href: '/categories', title: 'Categories' },
]

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [scrollThreshold, setScrollThreshold] = useState(500)
  const [sideNavHeight, setSideNavHeight] = useState(200)
  const router = useRouter()
  const isHomepage = router.pathname === '/'

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    document.addEventListener('scroll', handler)
    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [scrollThreshold])

  useEffect(() => {
    // Read the Y position on page of sideNav and store it in threshold.
    const sideNav = document.getElementById('sideNav')
    const sideNavTop = sideNav?.getBoundingClientRect().top ?? 500
    setScrollThreshold(sideNavTop)

    // Remember the sideNavs height.
    const sideNavHeight = sideNav?.clientHeight ?? 200
    setSideNavHeight(sideNavHeight)
  }, [])

  return (
    <header className="mb-[10vh]">
      <hgroup id="headerGroup" className="text-center mb-6 mt-6">
        <div className="flex justify-center items-baseline">
          <img
            src="/images/assets/HolstenLine-dark.png"
            alt="Holsten Line"
            className="h-12"
          />
          <Title>
            <Link href="/">Hendriks Blog</Link>
          </Title>
          <img
            src="/images/assets/HolstenLine-dark.png"
            alt="Holsten Line"
            className="h-12"
          />
        </div>
        {/* {isHomepage && (
            <Title>
              <Link href="/">Hendriks Blog</Link>
            </Title>
          )}
          {!isHomepage && (
            <h2 className="font-simonetta text-primary dark:text-primary-dark">
              <Link href="/">Hendriks Blog</Link>
            </h2>
          )} */}

        <h4 className="font-noto font-light mt-1">
          Ein Baum und seine Abenteuer
        </h4>
      </hgroup>
      {isFixed && <div style={{ height: sideNavHeight }}></div>}
      <div
        id="sideNav"
        className={`bg-background dark:bg-background-dark w-full z-50 ${
          isFixed ? 'fixed top-0 left-0 ' : ''
        }`}
      >
        <Ruler className="my-0" />
        <Wrapper>
          <nav className="py-4 flex justify-center">
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
        </Wrapper>

        <Ruler className="my-0" />
      </div>
      {!isHomepage && (
        <>
          <Ruler />
          <div className="mt-1">
            <Breadcrums />
          </div>
        </>
      )}
    </header>
  )
}
