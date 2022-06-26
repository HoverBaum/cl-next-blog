/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import { PropsWithChildren } from 'react'

type MDXLinkProps = {
  href: string
}

export const MDXLink: React.FC<PropsWithChildren<MDXLinkProps>> = ({
  children,
  href,
}) => {
  return (
    <a
      href={href}
      css={css`
        text-decoration: underline;
        &:hover {
          color: ${theme.mainColor};
        }
      `}
    >
      {children}
    </a>
  )
}
