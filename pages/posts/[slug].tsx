/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { BlogPost } from 'components/Posts/BlogPost'
import { Wrapper } from 'components/Wrapper'
import { AuthorCard } from 'components/AuthorCard'
import { recommandedPosts } from 'utils/postRecommandation'
import { RelatedPost } from 'components/Posts/RelatedPost'
import { SmallTitle } from 'components/SmallTitle'

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
  const relatedPosts = recommandedPosts(post, allPosts)
  return {
    props: {
      post,
      relatedPosts,
    },
  }
}

const DocLayout = ({
  post,
  relatedPosts,
}: {
  post: Post
  relatedPosts: Post[]
}) => {
  if (!post) return <p>Error</p>
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Wrapper>
        <BlogPost post={post} />
        <AuthorCard />
        <SmallTitle>Read next</SmallTitle>
        <div className="my-6 grid md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <RelatedPost key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export default DocLayout
