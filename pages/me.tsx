import { Wrapper } from 'components/Wrapper'
import Head from 'next/head'

const Me = () => {
  return (
    <div>
      <Head>
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        <h1>Hendrik Wallbaum</h1>
        <h4 className="mt-0 mb-8">Webdev. Intraperneur. Roleplayer.</h4>
        <p>
          I am a JavaScript Enthusiast, developer for fun, intrapreneur and
          passionate RPG player.
        </p>
      </Wrapper>
    </div>
  )
}

export default Me
