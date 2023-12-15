import Link from 'next/link'
import { WigglingEmoji } from './WigglingEmoji'
import { PortraitHendrik } from './PortraitHendrik'

export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark ">
      <div className="md:flex justify-between">
        <div>
          <p className="text-xl md:text-2xl mt-0 md:pr-4 text-justify">
            » Hi, I am Hendrik <WigglingEmoji>👋</WigglingEmoji> <br />
            JavaScript and GenAI Enthusiast; developer for the fun of it!
            <br />I write about webdev, technologie, personal thoughts and
            anything I find interesting. «
          </p>
          <Link href="/me">More about me</Link>
        </div>
        <div className="flex md:block flex-row justify-center mt-4 md:mt-0 max-w-[80%] md:max-w-[250px] mx-auto ">
          <PortraitHendrik />
        </div>
      </div>
    </div>
  )
}
