import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { PostCard } from 'components/Posts/PostCard'
import { LinkButton } from 'components/LinkButton'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { Button } from 'components/Button'
import { useKBar } from 'kbar'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextTalks } from 'components/NextSteps/NextTalks'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  const { query } = useKBar()
  const searchPosts = () => {
    query.toggle()
    query.setCurrentRootAction('openPost')
  }

  return (
    <div>
      <Head>
        <title>Hendriks Posts</title>
      </Head>

      <Wrapper>
        <h1>All posts</h1>
        <div className="mt-4">
          <LinkButton href="/posts/tags">Explore Tags</LinkButton>
          <LinkButton href="/posts/categories">Explore Categories</LinkButton>
          <Button onClick={searchPosts}>Search posts</Button>
        </div>
        <div>
          {posts.map((post, index) => (
            <div className="my-8" key={post._id}>
              <PostCard key={post._id} post={post} />
            </div>
          ))}
        </div>

        <NextSteps>
          <NextHome />
          <NextAboutMe />
          <NextTalks />
        </NextSteps>
      </Wrapper>
    </div>
  )
}

export default Home
