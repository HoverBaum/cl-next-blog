'use client'

import { Breadcrums } from 'components/Breadcrums'
import { SearchIcon } from 'components/Icons/SearchIcon'
import { Ruler } from 'components/Ruler'
import { Wrapper } from 'components/Wrapper'
import { useKBar } from 'kbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { isDarkMode } from 'utils/colorMode'
import { ModeSwitch } from './ModeSwitch'
import { useScrollFix } from './useScrollFix'
import { BurgerMenu } from './BurgerMenu'
import { headerLinks } from './headerLinks'

export const Header = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const { isFixed } = useScrollFix(navRef)
  const [sideNavHeight, setSideNavHeight] = useState(200)

  const { query } = useKBar()
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(isDarkMode())
  }, [])

  // Remember the sideNavs height.
  useEffect(() => {
    const sideNav = document.getElementById('sideNav')
    const sideNavHeight = sideNav?.clientHeight ?? 200
    setSideNavHeight(sideNavHeight)
  }, [])

  return (
    <header className="mb-[5vh]">
      <hgroup id="headerGroup" className="text-center mb-6 mt-6">
        <div className="flex justify-center items-baseline">
          <img
            src={`/images/assets/HolstenLine${isDark ? '-dark' : ''}.png`}
            alt="Holsten Line"
            className="h-12 hidden md:block"
          />
          <h1 className="text-primary dark:text-primary-dark">
            <Link href="/">Hendriks Blog</Link>
          </h1>
          <img
            src={`/images/assets/HolstenLine${isDark ? '-dark' : ''}.png`}
            alt="Holsten Line"
            className="h-12 hidden md:block"
          />
        </div>

        <h4 className="font-notoSans font-light mt-1">
          Ein Baum und seine Abenteuer
        </h4>
      </hgroup>
      {isFixed && <div style={{ height: sideNavHeight }}></div>}
      <div
        id="sideNav"
        ref={navRef}
        className={`bg-background dark:bg-background-dark w-full z-50  ${
          isFixed ? 'fixed top-0 left-0 ' : ''
        }`}
      >
        <Ruler className="my-0" />
        <Wrapper>
          <nav className="py-4 flex justify-center">
            <ul className="flex flex-wrap justify-between md:justify-center p-0 list-none w-full">
              <li className="grid place-items-center md:hidden relative">
                <BurgerMenu links={headerLinks} />
              </li>
              <div className="flex">
                {headerLinks.map(({ href, title, hideOnMobile }) => (
                  <li
                    key={href + title}
                    className={`mx-1 ${hideOnMobile ? 'hidden md:block' : ''}`}
                  >
                    <Link
                      href={href}
                      className="uppercase no-underline hover:underline focus:no-underline focus:text-text dark:focus:text-text-dark "
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </div>
              <div className="flex md:ml-6">
                <li>
                  <div
                    onClick={() => query.toggle()}
                    className="place-items-center h-full text-text dark:text-text-dark cursor-pointer flex"
                  >
                    <SearchIcon className="h-4 w-4 ml-0.5 hover:stroke-primary" />
                  </div>
                </li>
                <li className="ml-2 border-l-2 border-border dark:border-border-dark"></li>
                <li className="grid place-items-center ml-2">
                  <ModeSwitch />
                </li>
              </div>
            </ul>
          </nav>
        </Wrapper>

        <Ruler className="my-0" />
      </div>
      {!isHomepage && (
        <Wrapper>
          <Breadcrums />
        </Wrapper>
      )}
    </header>
  )
}
