/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { FeaturedPost } from 'components/Posts/FeaturedPost'
import { css } from '@emotion/react'
import { RecentTalks } from 'components/Home/RecentTalks'
import { MeIntro } from 'components/MeIntro'

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 3)
  return { props: { posts } }
}

const SmallTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="mt-10 mb-4 text-primary-600 dark:text-primary-dark font-simonetta">
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
        <MeIntro />

        <SmallTitle>Current post</SmallTitle>
        <FeaturedPost post={posts[0]} variant="big" />

        <SmallTitle>Recent posts</SmallTitle>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 2rem;
            grid-row-gap: 2rem;
            @media screen and (min-width: 640px) {
              grid-template-columns: repeat(2, 1fr);
            }
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
        <p>
          For more about me please visit:{' '}
          <a href="https://hendrikwallbaum.de/">hendrikwallbaum.de</a>.
        </p>

        <SmallTitle>Latest Talk</SmallTitle>
        <RecentTalks />
      </Wrapper>
    </div>
  )
}

export default Home
