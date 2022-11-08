/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Title: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <h1
      css={css`
        color: var(--primary);
        font-family: 'Simonetta-Black', serif;
        font-size: 4.1616rem;

        @media screen and (min-width: 640px) {
          font-size: 5.5349rem;
        }

        & a {
          color: var(--primary);
        }
      `}
    >
      {children}
    </h1>
  )
}
