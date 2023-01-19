type SocialLinkProps = {
  href: string
  children: React.ReactNode
}

export const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="cursor-pointer text-primary dark:text-primary-dark hover:text-primary-700 hover:dark:text-primary-400"
    >
      {children}
    </a>
  )
}
