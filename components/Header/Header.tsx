/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      css={css`
        background-image: url('/header.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: saturate(120%);
        width: 100%;
        height: 50vh;
        color: ${theme.headerColor};
      `}
    >
      <Wrapper>
        <hgroup
          css={css`
            padding-top: 7vh;
          `}
        >
          <h1
            css={css`
              margin-bottom: 0;
              text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
            `}
          >
            <Link href="/">Hendriks Blog</Link>
          </h1>
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
