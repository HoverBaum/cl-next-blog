import { Emoji } from 'components/Emoji'
import Link from 'next/link'

type NextItemsProps = {
  title: string
  href: string
  icon: string
}

export const NextItem = ({ href, icon, title }: NextItemsProps) => {
  return (
    <Link
      href={href}
      className="no-underline hover:no-underline py-6 border-2 border-border dark:border-border-dark cursor-pointer hover:bg-surface dark:hover:bg-surface-dark hover:shadow-md"
    >
      <div className="md:flex justify-between">
        <div className="w-full">
          <Emoji className="text-6xl block text-center">{icon}</Emoji>
          <span className="mt-4 text-2xl block text-center">{title}</span>
        </div>
      </div>
    </Link>
  )
}
