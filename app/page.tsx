import { compareDesc } from 'date-fns'
import { MeIntro } from 'components/MeIntro'
import { PostCard } from 'components/Posts/PostCard'
import { SmallTitle } from 'components/SmallTitle'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { LinkButton } from 'components/LinkButton'
import { RecentTalks } from 'components/Talks/RecentTalks'
import { FeaturedProjects } from 'components/Projects/FeaturedProjects'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextTalks } from 'components/NextSteps/NextTalks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hendriks Blog - HoverBaum',
}

const posts = allPosts
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  .slice(0, 3)

export default async function Home() {
  return (
    <Wrapper>
      <MeIntro />

      <SmallTitle>Current post</SmallTitle>
      <PostCard post={posts[0]} />

      <SmallTitle>Recent posts</SmallTitle>
      <div className="mb-6 grid md:grid-cols-2 gap-6">
        <PostCard post={posts[1]} />
        <PostCard post={posts[2]} />
      </div>
      <div className="grid place-items-center md:place-items-start">
        <LinkButton href="/posts">All Posts</LinkButton>
      </div>

      <SmallTitle>Latest Talks</SmallTitle>
      <RecentTalks />

      <FeaturedProjects />

      <NextSteps>
        <NextAboutMe />
        <NextPosts />
        <NextTalks />
      </NextSteps>
    </Wrapper>
  )
}
