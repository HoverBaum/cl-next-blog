/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { FeaturedPost } from 'components/Landing/FeaturedPost'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <Head>
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        <FeaturedPost post={posts[0]} variant="big" />
      </Wrapper>
    </div>
  )
}

export default Home
