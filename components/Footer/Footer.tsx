import { Wrapper } from 'components/Wrapper'
import { useKBar } from 'kbar'
import Link from 'next/link'

export const Footer = () => {
  const { query } = useKBar()
  return (
    <footer className="mt-[5vh] py-6 bg-surface dark:bg-surface-dark">
      <Wrapper>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <ul className="grid grid-cols-1 p-0 list-none">
            <li>
              <h4 className="mb-1">Links</h4>
            </li>
            <li>
              <Link href="/">
                <a className="no-underline hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <a
                href="https://hendrikwallbaum.de/impressum.html"
                className="no-underline hover:underline"
              >
                Impressum
              </a>
            </li>
          </ul>

          <div>
            <h4 className="mb-1">Search</h4>
            <div className="relative flex items-center w-full h-8 rounded-lg bg-background dark:bg-background-dark overflow-hidden border border-border">
              <div className="grid place-items-center h-full w-12 text-text dark:text-text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                // You can't tab this!
                tabIndex={-1}
                className="peer h-full w-full outline-none text-sm text-text dark:text-text-dark px-2"
                type="text"
                id="search"
                placeholder="Search something... (cmd + K)"
                onClick={(e) => {
                  //@ts-ignore
                  e.target.blur()
                  query.toggle()
                }}
              />
            </div>
          </div>
        </div>

        <p className="text-center">
          <small>
            ©{new Date().getFullYear()}{' '}
            <a href="https://hendrikwallbaum.de/">Hendrik Wallbaum</a>
          </small>
        </p>
      </Wrapper>
    </footer>
  )
}
