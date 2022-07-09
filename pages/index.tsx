/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { FeaturedPost } from 'components/Landing/FeaturedPost'
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import Link from 'next/link'

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
        color: var(--brand);
        margin-top: 4rem;
        margin-bottom: 1rem;
      `}
    >
      {children}
    </h4>
  )
}

const Home = ({ posts }: { posts: Post[] }) => {
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
            grid-row-gap: 0px;
          `}
        >
          <FeaturedPost post={posts[1]} variant="small" />
          <FeaturedPost post={posts[2]} variant="small" />
        </div>

        <SmallTitle>More</SmallTitle>
        <Link href="/posts">All posts</Link>
      </Wrapper>
    </div>
  )
}

export default Home
