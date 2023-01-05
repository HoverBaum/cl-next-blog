/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { BlogPost } from 'components/Posts/BlogPost'
import { Wrapper } from 'components/Wrapper'
import { AuthorCard } from 'components/AuthorCard'

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
      <Wrapper>
        <BlogPost post={post} />
        <AuthorCard />
      </Wrapper>
    </>
  )
}

export default DocLayout
