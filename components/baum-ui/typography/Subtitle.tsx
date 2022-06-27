/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const Subtitle: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <h4
      css={css`
        margin: 0;
        font-size: 1.333rem;
        color: #334a5e;
        font-family: 'Simonetta-Black', serif;
      `}
    >
      {children}
    </h4>
  )
}
