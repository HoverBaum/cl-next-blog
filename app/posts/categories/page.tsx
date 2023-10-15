import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'

export const metadata: Metadata = {
  title: 'Categories - HoverBaum',
}

export default function CategoriesPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const categories = categoriesFromPosts(posts)

  return (
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

      <NextSteps>
        <NextPosts />
        <NextAboutMe />
        <NextHome />
      </NextSteps>
    </Wrapper>
  )
}
