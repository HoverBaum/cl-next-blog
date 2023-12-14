import Image from 'next/image'
import Link from 'next/link'
import { SmallTitle } from './SmallTitle'

const MyImage = ({ className }: { className?: string }) => (
  <Image
    src="/images/assets/Hendrik_Excellency.png"
    alt="Hendrik"
    width={180}
    height={180}
    className={`border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark ${className}`}
  />
)

export const AuthorCard = () => {
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark max-w-[45rem] mx-auto">
      <div className="md:flex justify-between ">
        <div>
          <SmallTitle className="mt-0 text-2xl">Author</SmallTitle>
          <MyImage className="md:hidden" />
          <p className="pr-4 max-w-[60ch]">
            I am a JavaScript Enthusiast and developer for the fun of it!
            <br />
            Here I write about webdev, technology, personal thoughts and
            anything I finds interesting.
          </p>
          <Link href="/me">More about me</Link>
        </div>
        <MyImage className="hidden md:block" />
      </div>
    </div>
  )
}
