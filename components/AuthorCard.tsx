import { SmallTitle } from './SmallTitle'

const MyImage = ({ className }: { className?: string }) => (
  <img
    className={`h-[10rem] border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark ${className}`}
    src="/images/assets/portrait.jpg"
    alt="Hendrik"
  />
)

export const AuthorCard = () => {
  // A card with sharp corners that has a quote about me and a picture.
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark max-w-[45rem] mx-auto">
      <div className="md:flex justify-between ">
        <div>
          <SmallTitle className="mt-0 text-2xl">Author</SmallTitle>
          <MyImage className="md:hidden" />
          <p className="pr-4 max-w-[60ch]">
            Hendrik Is a JavaScript Enthusiast and developer for the fun of it!
            <br />
            He writes about webdev, technologie, personal thoughts and anything
            he finds interesting.
          </p>
          <a href="/me">More about Hendrik</a>
        </div>
        <MyImage className="hidden md:block" />
      </div>
    </div>
  )
}
