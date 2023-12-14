'use client'

/**
 * CURRENTLY NOT USED!!!!
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Breadcrums = () => {
  let pathname = usePathname()
  if (!pathname) pathname = '/'
  // Path with last element removed.
  const path = pathname.replace(/\/[^/]*$/, '')
  const parts = path.split('/').filter((part) => part !== '')
  const crumbs = [
    {
      name: 'Home',
      href: '/',
    },
  ].concat(
    parts.map((part, index) => ({
      // Name is part with capitalized first letter.
      name: part.charAt(0).toUpperCase() + part.slice(1),
      href: `/${parts.slice(0, index + 1).join('/')}`,
    }))
  )

  return (
    <nav>
      <ul className="flex flex-row liste-none p-0 m-0">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href}>
            <span className="opacity-60 hover:opacity-100">
              <Link href={crumb.href}>{crumb.name}</Link>
            </span>
            <span className="mx-0.5 opacity-60">
              {index < crumbs.length - 1 ? '/' : ''}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
