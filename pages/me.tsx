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
        <div className="md:grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <p>
              I am a JavaScript Enthusiast, developer for fun, intrapreneur and
              passionate RPG player.
            </p>

            <p>
              During the day I work as a Staff Engineer, Engineering Manager or
              Frontend Architect building applications throughout many
              industries. I enjoy getting an overview, shaping visions and
              teaching my juniors.
            </p>

            <p>
              In the past I have spoken at Code.Talks, Hamburgs largets
              developer conference and multiple MeetUps. Together with Netlight
              I am also a regular host for MeetUps in Hamburg.
            </p>
          </div>
          <figure>
            <img
              src="/images/assets/hendrik.jpg"
              alt="Hendrik during a trip through the fjords."
              className="mb-2 border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark"
            />
            <figcaption className="text-sm">
              Hendrik during a trip through the fjords of Norway.
            </figcaption>
          </figure>
        </div>

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
