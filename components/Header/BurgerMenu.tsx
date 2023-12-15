import { Card } from 'components/Card'
import { Emoji } from 'components/Emoji'
import { BarsIcon } from 'components/Icons/BarsIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useOnOutsideClick } from 'utils/hooks/useOnOutsideClick'
import { NavLink } from './headerLinks'

type BurgerMenuProps = {
  links: NavLink[]
}

export const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnOutsideClick(ref, () => setIsOpen(false))

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="relative">
      <BarsIcon className="w-4 h-4" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div ref={ref}>
          <Card className="absolute top-[120%] left-0 z-50 pb-2 pt-4">
            <nav className="min-w-[50vw]">
              <ul>
                {links.map((link) => (
                  <li key={link.href} className="mb-2">
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 no-underline"
                    >
                      <Emoji>{link.icon}</Emoji>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Card>
        </div>
      )}
    </div>
  )
}
