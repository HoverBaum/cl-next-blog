import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextCategories } from 'components/NextSteps/NextCategories'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { Metadata } from 'next'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { getAllPosts } from 'utils/blogPosts'
import { postsByDateDesc } from 'utils/sort'

type Props = {
  params: {
    categorySlug: string
  }
}

const categoryForSlug = async (categorySlug: string) => {
  const allPosts = await getAllPosts()
  const category = categoriesFromPosts(allPosts).find(
    (category) => category.categorySlug === categorySlug
  )
  return category
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts()
  const categories = categoriesFromPosts(allPosts)
  const paths = categories.map((category) => ({
    categorySlug: category.categorySlug,
  }))
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await categoryForSlug(params.categorySlug)
  return {
    title: category?.name + ' Posts - HoverBaum',
  }
}

export default async function SingleCategoryPage({
  params: { categorySlug },
}: Props) {
  const allPosts = await getAllPosts()
  const category = await categoryForSlug(categorySlug)
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

      {posts.map((post) => (
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
