/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  if (typeof children === 'string')
    return (
      <p
        css={css`
          text-align: justify;
          line-height: 120%;
        `}
      >
        {children}
      </p>
    )
  return <>{children}</>
}
