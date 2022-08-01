/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Title } from 'components/baum-ui'
import { Breadcrums } from 'components/Breadcrums'
import { theme } from 'components/theme'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const isHomepage = router.pathname === '/'

  return (
    <header
      css={css`
        margin-bottom: 10vh;
      `}
    >
      <Wrapper>
        <hgroup>
          {isHomepage && (
            <Title>
              <Link href="/">Hendriks Blog</Link>
            </Title>
          )}
          {!isHomepage && (
            <h2
              css={css`
                font-family: 'Simonetta-Black', serif;
                color: #cc4a1a;
              `}
            >
              <Link href="/">Hendriks Blog</Link>
            </h2>
          )}

          <h4
            css={css`
              font-family: 'Noto Sans', sans-serif;
              font-weight: 300;
              margin-top: 0;
            `}
          >
            Ein Baum und seine Abenteuer
          </h4>
        </hgroup>
        <nav>
          <ul
            css={css`
              list-style: none;
              padding: 0;
              display: flex;

              & > li {
                margin-right: 1rem;
                & a {
                  text-decoration: none;
                  text-transform: uppercase;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            `}
          >
            <li>
              <Link href="/categories/devbaum">Dev posts</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/tags">Tags</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        {!isHomepage && (
          <>
            <hr />
            <div
              css={css`
                margin-top: 0.5rem;
              `}
            >
              <Breadcrums />
            </div>
          </>
        )}
      </Wrapper>
    </header>
  )
}
