/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { css } from '@emotion/react'
import { theme } from 'components/theme'
import { FeaturedPost } from 'components/Landing/FeaturedPost'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  // console.log(posts)
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        <FeaturedPost post={posts[0]} />
      </Wrapper>
    </div>
  )
}

export default Home
