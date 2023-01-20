import Link from 'next/link'

type LinkButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export const LinkButton = ({ children, href, className }: LinkButtonProps) => {
  return (
    <Link
      className={`hover-shadow m-2 inline-block cursor-pointer font-semibold rounded-sm outline-none px-4 py-2 border-2 border-primary dark:border-primary-dark bg-background dark:bg-background-dark no-underline hover:no-underline hover:text-text hover:dark:text-text-dark ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}
