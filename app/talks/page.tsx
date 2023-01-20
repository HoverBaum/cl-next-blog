import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { talks } from 'components/Talks/allTalks'
import { TalkCard } from 'components/Talks/TalkCard'
import { Wrapper } from 'components/Wrapper'

export default function TalksPage() {
  return (
    <Wrapper>
      <h1 className="mb-8">All Talks</h1>

      {talks.map((talk) => (
        <TalkCard talk={talk} key={talk.title + talk.year} />
      ))}

      <NextSteps>
        <NextHome />
        <NextAboutMe />
        <NextPosts />
      </NextSteps>
    </Wrapper>
  )
}
