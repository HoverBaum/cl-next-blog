/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Title: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <h1
      css={css`
        color: var(--primary);
        font-family: 'Simonetta-Black', serif;
        font-size: 5.2917rem;

        & a {
          color: var(--primary);
        }
      `}
    >
      {children}
    </h1>
  )
}
