/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import { Headline } from 'components/baum-ui'
import { PostCard } from 'components/PostCard'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  // console.log(posts)
  return (
    <div>
      <Head>
        <title>Blog | All posts</title>
      </Head>

      <Wrapper>
        <Headline>All {posts.length} posts</Headline>
        <div>
          {posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              tags={post.tags}
              slug={post.slug}
              date={post.date}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Home
