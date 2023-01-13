import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { PostCard } from 'components/Posts/PostCard'
import { RecentTalks } from 'components/Talks/RecentTalks'
import { MeIntro } from 'components/MeIntro'
import { LinkButton } from 'components/LinkButton'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { SmallTitle } from 'components/SmallTitle'
import { FeaturedProjects } from 'components/Projects/FeaturedProjects'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextTalks } from 'components/NextSteps/NextTalks'
import { NextPosts } from 'components/NextSteps/NextPosts'

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 3)
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <Head>
        <title>Hendriks Blog</title>
      </Head>

      <Wrapper>
        <MeIntro />

        <SmallTitle>Current post</SmallTitle>
        <PostCard post={posts[0]} variant="big" />

        <SmallTitle>Recent posts</SmallTitle>
        <div className="mb-6 grid md:grid-cols-2 gap-6">
          <PostCard post={posts[1]} variant="big" />
          <PostCard post={posts[2]} variant="big" />
        </div>

        <LinkButton href="/posts">All Posts</LinkButton>

        <SmallTitle>Latest Talks</SmallTitle>
        <RecentTalks />

        <FeaturedProjects />

        <NextSteps>
          <NextAboutMe />
          <NextPosts />
          <NextTalks />
        </NextSteps>
      </Wrapper>
    </div>
  )
}

export default Home
