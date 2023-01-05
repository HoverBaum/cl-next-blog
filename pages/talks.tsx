import Head from 'next/head'
import { Wrapper } from 'components/Wrapper'
import { TalkCard } from 'components/Talks/TalkCard'
import { talks } from 'components/Talks/allTalks'
import Link from 'next/link'

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

        <Link href={'/'}>Back Home</Link>
      </Wrapper>
    </div>
  )
}

export default Talks
