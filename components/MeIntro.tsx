export const MeIntro = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="relative h-full p-4 bg-surface dark:bg-surface-dark border-2 border-border dark:border-border-dark shadow-xl">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full"
          src="/images/hendrik.jpg"
          alt="Hendrik"
        />
        <p className="text-center">
          Hi, I am Hendrik. Webdev for fun and passionate about knowledge
          sharing.
        </p>
      </div>
    </div>
  )
}
