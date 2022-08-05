/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer
      css={css`
        margin-top: 5vh;
      `}
    >
      <Wrapper>
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
            <Link href="/">Home</Link>
          </li>
        </ul>
      </Wrapper>
    </footer>
  )
}
