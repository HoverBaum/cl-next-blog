/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ActionId, ActionImpl } from 'kbar'
import React from 'react'

// eslint-disable-next-line react/display-name
export const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl
      active: boolean
      currentRootActionId?: ActionId
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        css={css`
          background: ${active ? '#eeeeee22' : 'transparent'};
          padding: 8px 16px;
          border-left: 2px solid ${active ? 'var(--text1 )' : 'transparent'};
        `}
      >
        <span>{action.name}</span>
      </div>
    )
  }
)
