import Link from 'next/link'
import { SmallTitle } from './SmallTitle'
import { PortraitHendrik } from './PortraitHendrik'

export const AuthorCard = () => {
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark max-w-[45rem] mx-auto">
      <div className="md:flex justify-between ">
        <div>
          <SmallTitle className="mt-0 text-2xl">Author</SmallTitle>

          <PortraitHendrik className="md:hidden mx-auto max-w-[75%]" />

          <p className="pr-4 max-w-[60ch] text-justify">
            I am a JavaScript and GenAI Enthusiast; developer for the fun of it!
            <br />
            Here I write about webdev, technology, personal thoughts and
            anything I finds interesting.
          </p>
          <Link href="/me">More about me</Link>
        </div>
        <div className="max-w-[250px]">
          <PortraitHendrik className="hidden md:block" />
        </div>
      </div>
    </div>
  )
}
