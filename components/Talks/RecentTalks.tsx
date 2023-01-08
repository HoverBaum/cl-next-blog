import { LinkButton } from 'components/LinkButton'
import { talks } from './allTalks'
import { TalkCard } from './TalkCard'

export const RecentTalks = () => {
  return (
    <div>
      <div>
        {talks.slice(0, 2).map((talk) => (
          <TalkCard key={talk.title + talk.year} talk={talk} />
        ))}
      </div>
      <LinkButton href="/talks">All talks</LinkButton>
    </div>
  )
}
