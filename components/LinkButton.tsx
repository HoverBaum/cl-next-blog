import { useRouter } from 'next/router'
import { Button } from './Button'

type LinkButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export const LinkButton = ({ children, href, className }: LinkButtonProps) => {
  const router = useRouter()
  return (
    <Button
      className={className}
      onClick={() => {
        router.push(href)
      }}
    >
      {children}
    </Button>
  )
}
