/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { categoriesFromPosts, CategoryType } from 'utils/categoriesFromPosts'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const categories = categoriesFromPosts(posts)
  return { props: { posts, categories } }
}

const Categories = ({
  posts,
  categories,
}: {
  posts: Post[]
  categories: CategoryType[]
}) => {
  return (
    <div>
      <Head>
        <title>Hendriks Blog | Categories</title>
      </Head>

      <Wrapper>
        <h1>Categories</h1>
        {categories.map((category) => (
          <div key={category.name}>
            <h4>
              <Link
                href={category.slug}
              >{`${category.name} - ${category.count}`}</Link>
            </h4>
          </div>
        ))}
      </Wrapper>
    </div>
  )
}

export default Categories
