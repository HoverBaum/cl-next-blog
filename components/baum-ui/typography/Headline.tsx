/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Headline: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <h1
      css={css`
        margin-top: 2.074em;
        margin-bottom: 0.2rem;
      `}
    >
      {children}
    </h1>
  )
}
