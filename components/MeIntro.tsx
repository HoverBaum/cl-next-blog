import Image from 'next/image'
import Link from 'next/link'
import { WigglingEmoji } from './WigglingEmoji'

export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark ">
      <div className="md:flex justify-between">
        <div className="">
          <p className="text-xl md:text-2xl mt-0">
            » Hi, I am Hendrik <WigglingEmoji>👋</WigglingEmoji> <br />
            JavaScript Enthusiast and developer for fun!
            <br />I write about webdev, technologie, personal thoughts and
            anything I find interesting. «
          </p>
          <Link href="/me">More about me</Link>
        </div>
        <div className="flex md:block flex-row justify-center mt-4 md:mt-0">
          <span className="text-[0] inline-block border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark">
            <Image
              src="/images/assets/portrait.jpg"
              alt="Hendrik"
              width={250}
              height={250}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
