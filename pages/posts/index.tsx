/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { css } from '@emotion/react'
import { Headline } from 'components/baum-ui'
import { FeaturedPost } from 'components/Posts/FeaturedPost'

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
        <title>Blog | All posts</title>
      </Head>

      <Wrapper>
        <Headline>All {posts.length} posts</Headline>
        <div>
          {posts.map((post, index) => (
            <div
              css={css`
                margin-bottom: 2rem;
                margin-top: 2rem;
              `}
              key={post._id}
            >
              <FeaturedPost
                key={post._id}
                post={post}
                variant={index === 0 ? 'big' : 'small'}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Home
