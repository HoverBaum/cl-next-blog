import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="mt-[5vh] pb-6">
      <Wrapper>
        <ul className="flex p-0 list-none">
          <li>
            <Link href="/">
              <a className="uppercase no-underline hover:underline">Home</a>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </footer>
  )
}
