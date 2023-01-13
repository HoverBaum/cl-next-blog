import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextProjects } from 'components/NextSteps/NextProjects'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextTalks } from 'components/NextSteps/NextTalks'
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

        <NextSteps>
          <NextHome />
          <NextProjects />
          <NextPosts />
          <NextTalks />
        </NextSteps>
      </Wrapper>
    </div>
  )
}

export default Me
