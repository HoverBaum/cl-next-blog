/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

// eslint-disable-next-line react/display-name
export const KBarCategory = React.forwardRef(
  ({ category }: { category: string }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        css={css`
          padding: 8px 16px;
        `}
      >
        <span
          css={css`
            font-size: 0.75em;
            opacity: 0.75;
            text-transform: uppercase;
          `}
        >
          {category}
        </span>
      </div>
    )
  }
)
