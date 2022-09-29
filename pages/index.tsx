/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { FeaturedPost } from 'components/Posts/FeaturedPost'
import { css } from '@emotion/react'
import Link from 'next/link'
import { IconItem } from 'components/IconItem'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const SmallTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4
      css={css`
        color: var(--primary);
        margin-top: 4rem;
        margin-bottom: 1rem;
      `}
    >
      {children}
    </h4>
  )
}

const Home = ({ posts }: { posts: Post[] }) => {
  console.log(posts[0])
  return (
    <div>
      <Head>
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        <SmallTitle>Current post</SmallTitle>
        <FeaturedPost post={posts[0]} variant="big" />

        <SmallTitle>Recent posts</SmallTitle>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 2rem;
            grid-row-gap: 2rem;
          `}
        >
          <FeaturedPost post={posts[1]} variant="small" />
          <FeaturedPost post={posts[2]} variant="small" />
        </div>

        <SmallTitle>This is me</SmallTitle>
        <p>
          Hi, I am Hendrik. Webdev for fun and passionate about knowledge
          sharing.
        </p>
      </Wrapper>
    </div>
  )
}

export default Home
