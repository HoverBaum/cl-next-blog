/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <p
      css={css`
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: var(--text);
        line-height: 150%;
      `}
    >
      {children}
    </p>
  )
}
