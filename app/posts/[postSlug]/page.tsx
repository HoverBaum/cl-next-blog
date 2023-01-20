import { allPosts } from '.contentlayer/generated'
import { AuthorCard } from 'components/AuthorCard'
import { BlogPost } from 'components/Posts/BlogPost'
import { RelatedPost } from 'components/Posts/RelatedPost'
import { SmallTitle } from 'components/SmallTitle'
import { Wrapper } from 'components/Wrapper'
import { recommandedPosts } from 'utils/postRecommandation'
import { postsByDateDesc } from 'utils/sort'

export function generateStaticParams() {
  const posts = allPosts.sort(postsByDateDesc)
  const paths = posts.map((post) => ({
    postSlug: post.postSlug,
  }))
  return paths
}

export default function SinglePostPage({
  params: { postSlug },
}: {
  params: { postSlug: string }
}) {
  const post = allPosts.find((post) => post.postSlug === postSlug)
  if (!post)
    return (
      <Wrapper>
        <h1>Post not found</h1>
      </Wrapper>
    )
  const relatedPosts = recommandedPosts(post, allPosts)

  return (
    <Wrapper>
      <BlogPost post={post} />
      <AuthorCard />
      <SmallTitle>Read next</SmallTitle>
      <div className="my-6 grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <RelatedPost key={post.slug} post={post} />
        ))}
      </div>
    </Wrapper>
  )
}
