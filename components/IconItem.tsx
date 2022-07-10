/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type IconItemsProps = {
  icon?: string
}

export const IconItem: React.FC<PropsWithChildren<IconItemsProps>> = ({
  children,
  icon,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
      `}
    >
      <span
        css={css`
          font-size: 2rem;
          margin-bottom: 1rem;
        `}
      >
        {icon || '🌳'}
      </span>
      {children}
    </div>
  )
}
