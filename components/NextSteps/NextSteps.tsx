import { SmallTitle } from 'components/SmallTitle'
import { useRouter } from 'next/router'
import { NextItem } from './NextItem'

export const NextSteps = () => {
  const router = useRouter()
  console.log(router.pathname)
  const isTalksPage = /talks$/.test(router.pathname)
  const isPostsPage = /posts$/.test(router.pathname)

  return (
    <section>
      <SmallTitle>Where to go next</SmallTitle>
      <div className="grid md:grid-cols-3 gap-4">
        <NextItem title="About Me" icon="👨‍💻" href="/me" />
        {!isPostsPage && <NextItem title="All Posts" icon="📖" href="/posts" />}
        {!isTalksPage && <NextItem title="My Talks" icon="🎙️" href="/talks" />}
        {(isTalksPage || isPostsPage) && (
          <NextItem title="Home" icon="🌳" href="/" />
        )}
      </div>
    </section>
  )
}
