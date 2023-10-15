import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextTags } from 'components/NextSteps/NextTags'
import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { postsByDateDesc } from 'utils/sort'
import { tagsFromPosts } from 'utils/tagsFromPosts'

type Props = {
  params: {
    tagSlug: string
  }
}

const tagForSlug = (tagSlug: string) => {
  const tag = tagsFromPosts(allPosts).find((tag) => tag.tagSlug === tagSlug)
  return tag
}

export function generateStaticParams() {
  const tags = tagsFromPosts(allPosts)
  const paths = tags.map((tag) => ({
    tagSlug: tag.tagSlug,
  }))
  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const tag = tagForSlug(params.tagSlug)
  return {
    title: tag?.tag + ' Posts - HoverBaum',
  }
}

export default function SingleTagPage({ params: { tagSlug } }: Props) {
  const tag = tagForSlug(tagSlug)
  if (!tag)
    return (
      <Wrapper>
        <h1>Tag not found</h1>
      </Wrapper>
    )
  const posts = allPosts
    .filter((post) => post.tags && post.tags.includes(tag.name))
    .sort(postsByDateDesc)

  return (
    <Wrapper>
      <h1>{tag.tag}</h1>

      {posts.map((post) => (
        <div className="my-6" key={post._id}>
          <PostCard key={post._id} post={post} />
        </div>
      ))}

      <NextSteps>
        <NextTags />
        <NextPosts />
        <NextAboutMe />
        <NextHome />
      </NextSteps>
    </Wrapper>
  )
}
