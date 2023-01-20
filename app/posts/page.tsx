import { LinkButton } from 'components/LinkButton'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextTalks } from 'components/NextSteps/NextTalks'
import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { postsByDateDesc } from 'utils/sort'
import { SearchPostsButton } from './SearchPostsButton'

export default function PostsPage() {
  const posts = allPosts.sort(postsByDateDesc)

  return (
    <Wrapper>
      <h1>All posts</h1>
      <div className="mt-4">
        <LinkButton href="/posts/tags">Explore Tags</LinkButton>
        <LinkButton href="/posts/categories">Explore Categories</LinkButton>
        <SearchPostsButton />
      </div>
      <div>
        {posts.map((post) => (
          <div className="my-8" key={post._id}>
            <PostCard key={post._id} post={post} />
          </div>
        ))}
      </div>

      <NextSteps>
        <NextHome />
        <NextAboutMe />
        <NextTalks />
      </NextSteps>
    </Wrapper>
  )
}
