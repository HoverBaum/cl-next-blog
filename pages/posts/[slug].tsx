import Head from 'next/head'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.slug)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(ctx: { params: any }) {
  const slugs = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug]
  const slug = `/posts/${slugs.join('/')}`
  console.log('slug for posts:', slug)
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) return { props: {} }
  return {
    props: {
      post,
    },
  }
}

const DocLayout = ({ post }: { post: Post }) => {
  if (!post) return <p>Error</p>
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  )
}

export default DocLayout
