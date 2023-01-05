import Link from 'next/link'
import { talks } from './allTalks'
import { TalkCard } from './TalkCard'

export const RecentTalks = () => {
  return (
    <div>
      <div>
        {talks.slice(0, 3).map((talk) => (
          <TalkCard key={talk.title + talk.year} talk={talk} />
        ))}
      </div>
      <Link href="/talks">All talks</Link>
    </div>
  )
}
