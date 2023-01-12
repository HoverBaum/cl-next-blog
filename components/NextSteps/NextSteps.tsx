import { SmallTitle } from 'components/SmallTitle'
import { NextItem } from './NextItem'

export const NextSteps = () => {
  return (
    <section>
      <SmallTitle>Where to go next</SmallTitle>
      <div className="grid md:grid-cols-3 gap-4">
        <NextItem title="About Me" icon="👨‍💻" href="/me" />
        <NextItem title="All Posts" icon="📖" href="/posts" />
        <NextItem title="My Talks" icon="🎙️" href="/talks" />
      </div>
    </section>
  )
}
