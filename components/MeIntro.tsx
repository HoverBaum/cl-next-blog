export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="relative h-full p-4 bg-surface dark:bg-surface-dark border-2 border-border dark:border-border-dark shadow-xl">
      <div className="flex justify-between">
        <div className="grid place-items-center w-full r-4">
          <p className="text-2xl">
            » Hi, I am Hendrik 👋 <br />
            JavaScript Enthusiast and developer for fun!
            <br />
            Schlauer Satz kommt dann hier noch mal hin. «
          </p>
        </div>
        <img
          className="h-[10rem]"
          src="/images/assets/portrait.jpg"
          alt="Hendrik"
        />
      </div>
    </div>
  )
}
