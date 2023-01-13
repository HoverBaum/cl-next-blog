/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { tagsFromPosts, TagType } from 'utils/tagsFromPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const tags = tagsFromPosts(posts)
  return { props: { posts, tags } }
}

const Tags = ({ posts, tags }: { posts: Post[]; tags: TagType[] }) => {
  return (
    <div>
      <Head>
        <title>Hendriks Blog | Tags</title>
      </Head>

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
    </div>
  )
}

export default Tags
