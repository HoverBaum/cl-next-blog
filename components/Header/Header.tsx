/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Title } from 'components/baum-ui'
import { theme } from 'components/theme'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const isHomepage = router.pathname === '/'

  return (
    <header>
      <Wrapper>
        <hgroup
          css={css`
            margin-bottom: 10vh;
          `}
        >
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
      </Wrapper>
    </header>
  )
}
