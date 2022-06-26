/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Wrapper: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 45rem;
        padding: 0 1rem;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}
