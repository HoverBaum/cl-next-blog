import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'
import { tagsFromPosts } from 'utils/tagsFromPosts'

export const metadata: Metadata = {
  title: 'Tags - HoverBaum',
}

export default function TagsPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const tags = tagsFromPosts(posts)

  return (
    <Wrapper>
      <h1>Tags</h1>
      {tags.map((tag) => (
        <div key={tag.name}>
          <h4>
            <Link href={tag.slug}>{`${tag.tag} - ${tag.count}`}</Link>
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
