import { NextItem } from './NextItem'

export const NextSteps = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <NextItem title="Learn more about me" href="/me" hrefText="About Me" />
      <NextItem title="Explore all Posts" href="/posts" hrefText="All Posts" />
      <NextItem title="See all my talks" href="/talks" hrefText="All Talks" />
    </div>
  )
}
