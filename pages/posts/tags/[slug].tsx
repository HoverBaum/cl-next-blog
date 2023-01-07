/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { css } from '@emotion/react'
import { Wrapper } from 'components/Wrapper'
import { tagsFromPosts, TagType } from 'utils/tagsFromPosts'
import { postsByDateDesc } from 'utils/sort'
import { FeaturedPost } from 'components/Posts/FeaturedPost'

export async function getStaticPaths() {
  const tags = tagsFromPosts(allPosts)
  const paths = tags.map((tag) => tag.slug)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(ctx: { params: any }) {
  const slugs = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug]
  const slug = `/posts/tags/${slugs.join('/')}`
  const tags = tagsFromPosts(allPosts)
  const tag = tags.find((tag) => tag.slug === slug)
  if (!tag) return { props: {} }
  return {
    props: {
      tag,
      posts: allPosts
        .filter((post) => post.tags && post.tags.includes(tag.name))
        .sort(postsByDateDesc),
    },
  }
}

const TagLayout = ({ posts, tag }: { posts: Post[]; tag: TagType }) => {
  return (
    <>
      <Head>
        <title>{tag.tag}</title>
      </Head>
      <Wrapper>
        <h1>{tag.tag}</h1>

        {posts.map((post, index) => (
          <div
            css={css`
              margin-bottom: 2rem;
              margin-top: 2rem;
            `}
            key={post._id}
          >
            <FeaturedPost
              key={post._id}
              post={post}
              variant={index === 0 ? 'big' : 'small'}
            />
          </div>
        ))}
      </Wrapper>
    </>
  )
}

export default TagLayout
