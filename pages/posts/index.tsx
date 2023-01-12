/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { css } from '@emotion/react'
import { FeaturedPost } from 'components/Posts/FeaturedPost'
import { LinkButton } from 'components/LinkButton'

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
        <title>Hendriks Posts</title>
      </Head>

      <Wrapper>
        <h1>All {posts.length} posts</h1>
        <div className="mt-4">
          <LinkButton href="/posts/tags">Explore Tags</LinkButton>
          <LinkButton href="/posts/categories">Explore Categories</LinkButton>
        </div>
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
