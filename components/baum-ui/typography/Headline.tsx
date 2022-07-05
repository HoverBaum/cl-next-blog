/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Headline: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <h1
      css={css`
        margin-bottom: 0.2rem;
      `}
    >
      {children}
    </h1>
  )
}
