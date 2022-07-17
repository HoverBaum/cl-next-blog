/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const defaultOpacity = 0.66

export const Breadcrums = () => {
  const route = useRouter()
  // Path with last element removed.
  const path = route.asPath.replace(/\/[^/]*$/, '')
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
      <ul
        css={css`
          display: flex;
          flex-direction: row;
          list-style: none;
          padding: 0;
          margin: 0;
        `}
      >
        {crumbs.map((crumb, index) => (
          <li key={crumb.href}>
            <span
              css={css`
                opacity: ${defaultOpacity};
                &:hover {
                  opacity: 1;
                }
              `}
            >
              <Link href={crumb.href}>{crumb.name}</Link>
            </span>
            <span
              css={css`
                margin: 0 0.2rem;
                opacity: ${defaultOpacity};
              `}
            >
              {index < crumbs.length - 1 ? '/' : ''}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
