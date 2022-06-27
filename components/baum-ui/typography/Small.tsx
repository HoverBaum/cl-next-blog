/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Small: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <small
      css={css`
        font-size: 0.7708rem;
        font-family: 'Roboto', sans-serif;
        color: rgba(0, 0, 0, 0.87);
      `}
    >
      {children}
    </small>
  )
}
