import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post: Post) {
  return (
    <div>
      <h2>
        <Link href={post.slug}>
          <a>{post.title}</a>
        </Link>
      </h2>
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
