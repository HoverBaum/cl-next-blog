/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type ButtonProps = {
  onClick?: () => void
  isDisabled?: boolean
  href?: string
}

const buttonCSS = css`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
  background: transparent;
  color: ${theme.highlightColor};
  outline: 2px solid ${theme.highlightColor};

  :hover,
  :focus {
    color: ${theme.mainColor};
    outline-color: ${theme.mainColor};
  }
`

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  isDisabled,
  href,
}) => {
  if (href)
    return (
      <div
        css={css`
          a {
            ${buttonCSS}
            text-decoration: none;
          }
        `}
      >
        <Link href={href}>{children}</Link>
      </div>
    )

  return (
    <button onClick={onClick} disabled={isDisabled} css={buttonCSS}>
      {children}
    </button>
  )
}
