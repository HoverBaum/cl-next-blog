import { WigglingEmoji } from './WigglingEmoji'

export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="relative h-full p-4 border-2 border-border dark:border-border-dark ">
      <div className="flex justify-between">
        <div className="w-full r-4 pl-4">
          <p className="text-2xl pr-4">
            » Hi, I am Hendrik <WigglingEmoji>👋</WigglingEmoji> <br />
            JavaScript Enthusiast and developer for fun!
            <br />I write about webdev, technologie, personal thoughts and
            anything I find interesting. «
          </p>
          <a href="/me">More about me</a>
        </div>
        <img
          className="h-[10rem] border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark"
          src="/images/assets/portrait.jpg"
          alt="Hendrik"
        />
      </div>
    </div>
  )
}
