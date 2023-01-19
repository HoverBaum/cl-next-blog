/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import { postsByDateDesc } from 'utils/sort'
import { PostCard } from 'components/Posts/PostCard'
import { categoriesFromPosts, CategoryType } from 'utils/categoriesFromPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextCategories } from 'components/NextSteps/NextCategories'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'

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
  const slug = `/posts/categories/${slugs.join('/')}`
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
        <h1>{category.name}</h1>

        {posts.map((post, index) => (
          <div className="my-6" key={post._id}>
            <PostCard key={post._id} post={post} />
          </div>
        ))}

        <NextSteps>
          <NextCategories />
          <NextPosts />
          <NextAboutMe />
          <NextHome />
        </NextSteps>
      </Wrapper>
    </>
  )
}

export default CategoryLayout
