import { PropsWithChildren } from 'react'

type MDXLinkProps = {
  href?: string
}

export const MDXLink: React.FC<PropsWithChildren<MDXLinkProps>> = ({
  children,
  href,
}) => {
  return (
    <a href={href} className="underline">
      {children}
    </a>
  )
}
