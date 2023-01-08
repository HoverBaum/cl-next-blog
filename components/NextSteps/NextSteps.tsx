import { NextItem } from './NextItem'

export const NextSteps = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <NextItem title="About Me" icon="👨‍💻" href="/me" />
      <NextItem title="All Posts" icon="📖" href="/posts" />
      <NextItem title="My Talks" icon="🎙️" href="/talks" />
    </div>
  )
}
