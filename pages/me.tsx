import { DevToIcon } from 'components/Icons/social/DevToIcon'
import { GitHubIcon } from 'components/Icons/social/GitHubIcon'
import { LinkedInIcon } from 'components/Icons/social/LinkedInIcon'
import { TwitterIcon } from 'components/Icons/social/TwitterIcon'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextProjects } from 'components/NextSteps/NextProjects'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextTalks } from 'components/NextSteps/NextTalks'
import { SocialLink } from 'components/SocialLink'
import { Wrapper } from 'components/Wrapper'
import Head from 'next/head'
import Image from "next/image";

const Me = () => {
  return (
    <div>
      <Head>
        <title>Hendrik Wallbaum</title>
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

            <h2 className="text-3xl mt-8 mb-0">Connect</h2>
            <p className="mt-2">
              <a href="mailto:mail@hendrikwallbaum.de">
                mail@hendrikwallbaum.de
              </a>
            </p>
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
          <figure>
            <div className="mb-2 text-[0] border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark">
              <Image
                src="/images/assets/hendrik.jpg"
                alt="Hendrik during a trip through the fjords."
                width={500}
                height={757}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
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
  );
}

export default Me
