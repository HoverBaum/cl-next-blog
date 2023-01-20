import Image from 'next/image'
import Link from 'next/link'
import { WigglingEmoji } from './WigglingEmoji'
import ProfilePicture from '../public/images/assets/portrait.jpg'

export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark ">
      <div className="md:flex justify-between">
        <div>
          <p className="text-xl md:text-2xl mt-0">
            » Hi, I am Hendrik <WigglingEmoji>👋</WigglingEmoji> <br />
            JavaScript Enthusiast and developer for fun!
            <br />I write about webdev, technologie, personal thoughts and
            anything I find interesting. «
          </p>
          <Link href="/me">More about me</Link>
        </div>
        <div className="flex md:block flex-row justify-center mt-4 md:mt-0">
          <span className="max-w-[80%] md:max-w-[300px] text-[0] inline-block border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark">
            <Image
              src={ProfilePicture}
              width={300}
              height={300}
              alt="Hendrik"
            />
          </span>
        </div>
      </div>
    </div>
  )
}
