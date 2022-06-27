/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { css } from '@emotion/react'
import { theme } from 'components/theme'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post: Post) {
  return (
    <div>
      <h3>
        <Link href={post.slug}>
          <a
            css={css`
              color: ${theme.textColor};
              cursor: pointer;
            `}
          >
            {post.title}
          </a>
        </Link>
      </h3>
      <div>
        {post.tags && post.tags.map((tag) => <span key={tag}>#{tag} </span>)}
      </div>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

const Home = ({ posts }: { posts: Post[] }) => {
  // console.log(posts)
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Building Hendriks new blog</title>
      </Head>

      <Wrapper>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </Wrapper>
    </div>
  )
}

export default Home
