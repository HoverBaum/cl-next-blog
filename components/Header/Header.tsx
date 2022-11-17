import { Title } from 'components/baum-ui'
import { Breadcrums } from 'components/Breadcrums'
import { Ruler } from 'components/Ruler'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const isHomepage = router.pathname === '/'

  return (
    <header className="mb-[10vh]">
      <Wrapper>
        <hgroup>
          {isHomepage && (
            <Title>
              <Link href="/">Hendriks Blog</Link>
            </Title>
          )}
          {!isHomepage && (
            <h2 className="font-simonetta text-primary dark:text-primary-dark">
              <Link href="/">Hendriks Blog</Link>
            </h2>
          )}

          <h4 className="font-noto font-light mt-1">
            Ein Baum und seine Abenteuer
          </h4>
        </hgroup>
        <nav>
          <ul className="flex p-0 list-none">
            <li className="mr-4">
              <Link href="/categories/devbaum">
                <a className="uppercase no-underline hover:underline">
                  Dev posts
                </a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/posts">
                <a className="uppercase no-underline hover:underline">Posts</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/tags">
                <a className="uppercase no-underline hover:underline">Tags</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/categories">
                <a className="uppercase no-underline hover:underline">
                  Categories
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {!isHomepage && (
          <>
            <Ruler />
            <div className="mt-1">
              <Breadcrums />
            </div>
          </>
        )}
      </Wrapper>
    </header>
  )
}
