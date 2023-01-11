import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { FeaturedPost } from 'components/Posts/FeaturedPost'
import { RecentTalks } from 'components/Talks/RecentTalks'
import { MeIntro } from 'components/MeIntro'
import { LinkButton } from 'components/LinkButton'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { SmallTitle } from 'components/SmallTitle'

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
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        <MeIntro />

        <SmallTitle>Current post</SmallTitle>
        <FeaturedPost post={posts[0]} variant="big" />

        <SmallTitle>Recent posts</SmallTitle>
        <div className="mb-6 grid md:grid-cols-2 gap-6">
          <FeaturedPost post={posts[1]} variant="big" />
          <FeaturedPost post={posts[2]} variant="big" />
        </div>

        <LinkButton href="/posts">All Posts</LinkButton>

        <SmallTitle>Latest Talks</SmallTitle>
        <RecentTalks />

        <SmallTitle>Where to go next</SmallTitle>
        <NextSteps />
      </Wrapper>
    </div>
  )
}

export default Home
