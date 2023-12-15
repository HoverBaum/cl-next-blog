import { DevToIcon } from 'components/Icons/social/DevToIcon'
import { GitHubIcon } from 'components/Icons/social/GitHubIcon'
import { LinkedInIcon } from 'components/Icons/social/LinkedInIcon'
import { TwitterIcon } from 'components/Icons/social/TwitterIcon'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextProjects } from 'components/NextSteps/NextProjects'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextTalks } from 'components/NextSteps/NextTalks'
import { PortraitHendrik } from 'components/PortraitHendrik'
import { FeaturedProjects } from 'components/Projects/FeaturedProjects'
import { SocialLink } from 'components/SocialLink'
import { Wrapper } from 'components/Wrapper'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hendrik - HoverBaum',
}

export default function Me() {
  return (
    <div>
      <Wrapper>
        <h1>Hendrik Wallbaum</h1>
        <h4 className="mt-0 mb-8">
          JS Enthusiast. Developer for fun. Roleplayer.
        </h4>
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

            <h2 className="text-3xl mt-8 mb-0 relative">
              <a id="contact" className="absolute -top-[4rem]"></a>
              Connect
            </h2>
            <p className="mt-2">mail[at]hendrikwallbaum.de</p>
            <ul className="flex">
              <li className="mr-2">
                <SocialLink href="https://github.com/HoverBaum">
                  <GitHubIcon className="w-6 h-6 " />
                </SocialLink>
              </li>
              <li className="mr-2">
                <SocialLink href="https://twitter.com/HoverBaum">
                  <TwitterIcon className="w-6 h-6 " />
                </SocialLink>
              </li>
              <li className="mr-2">
                <SocialLink href="https://dev.to/hoverbaum">
                  <DevToIcon className="w-6 h-6 " />
                </SocialLink>
              </li>
              <li className="mr-2">
                <SocialLink href="https://www.linkedin.com/in/hendrik-wallbaum-196432113/">
                  <LinkedInIcon className="w-6 h-6 " />
                </SocialLink>
              </li>
            </ul>
          </div>
          <figure className="flex md:block flex-col items-center mt-4 md:mt-0 mx-auto">
            <PortraitHendrik />

            <figcaption className="text-sm"></figcaption>
          </figure>
        </div>

        <FeaturedProjects />

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
