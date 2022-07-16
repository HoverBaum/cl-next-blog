/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { css } from '@emotion/react'
import { Wrapper } from 'components/Wrapper'
import { postsByDateDesc } from 'utils/sort'
import { FeaturedPost } from 'components/Landing/FeaturedPost'
import { categoriesFromPosts, CategoryType } from 'utils/categoriesFromPosts'
import { Headline } from 'components/baum-ui'

export async function getStaticPaths() {
  const categories = categoriesFromPosts(allPosts)
  const paths = categories.map((category) => category.slug)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(ctx: { params: any }) {
  const slugs = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug]
  const slug = `/categories/${slugs.join('/')}`
  console.log('slug for category:', slug)
  const categories = categoriesFromPosts(allPosts)
  const category = categories.find((category) => category.slug === slug)
  if (!category) return { props: {} }
  return {
    props: {
      category,
      posts: allPosts
        .filter(
          (post) => post.categories && post.categories.includes(category.name)
        )
        .sort(postsByDateDesc),
    },
  }
}

const CategoryLayout = ({
  posts,
  category,
}: {
  posts: Post[]
  category: CategoryType
}) => {
  return (
    <>
      <Head>
        <title>{category.name}</title>
      </Head>
      <Wrapper>
        <Headline>{category.name}</Headline>

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

export default CategoryLayout
