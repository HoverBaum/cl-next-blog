import Head from 'next/head'
import { Wrapper } from 'components/Wrapper'
import { TalkCard } from 'components/Talks/TalkCard'
import { talks } from 'components/Talks/allTalks'
import Link from 'next/link'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextPosts } from 'components/NextSteps/NextPosts'

const Talks = () => {
  return (
    <div>
      <Head>
        <title>Hendriks Talks</title>
      </Head>

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
    </div>
  )
}

export default Talks
