import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextCategories } from 'components/NextSteps/NextCategories'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { postsByDateDesc } from 'utils/sort'

export function generateStaticParams() {
  const tags = categoriesFromPosts(allPosts)
  const paths = tags.map((category) => ({
    categorySlug: category.categorySlug,
  }))
  return paths
}

export default function SingleCategoryPage({
  params: { categorySlug },
}: {
  params: { categorySlug: string }
}) {
  const category = categoriesFromPosts(allPosts).find(
    (category) => category.categorySlug === categorySlug
  )
  if (!category)
    return (
      <Wrapper>
        <h1>Category not found</h1>
      </Wrapper>
    )
  const posts = allPosts
    .filter(
      (post) => post.categories && post.categories.includes(category.name)
    )
    .sort(postsByDateDesc)

  return (
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
  )
}
