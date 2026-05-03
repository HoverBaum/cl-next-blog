import { Metadata } from 'next'
import { AuthorCard } from 'components/AuthorCard'
import { BlogPost } from 'components/Posts/BlogPost'
import { RelatedPost } from 'components/Posts/RelatedPost'
import { SmallTitle } from 'components/SmallTitle'
import { Wrapper } from 'components/Wrapper'
import { recommandedPosts } from 'utils/postRecommandation'
import { postsByDateDesc } from 'utils/sort'
import { DraftBadge } from 'components/DraftBadge'
import { getAllPosts } from 'utils/blogPosts'

type Props = {
  params: { postSlug: string }
}

const postForSlug = async (postSlug: string) => {
  const allPosts = await getAllPosts()
  return allPosts.find(
    (post) =>
      post.postSlug === postSlug || post.alternativeSlugs?.includes(postSlug)
  )
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts()
  const posts = [...allPosts].sort(postsByDateDesc)
  const paths = posts.map((post) => ({
    postSlug: post.postSlug,
  }))
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await postForSlug(params.postSlug)
  return {
    title: post?.title + ' - HoverBaum',
  }
}

export default async function SinglePostPage({ params }: Props) {
  const allPosts = await getAllPosts()
  const post = allPosts.find(
    (entry) =>
      entry.postSlug === params.postSlug ||
      entry.alternativeSlugs?.includes(params.postSlug)
  )
  if (!post)
    return (
      <Wrapper>
        <h1>Post not found</h1>
      </Wrapper>
    )
  const relatedPosts = recommandedPosts(post, allPosts)

  return (
    <Wrapper>
      {post.status === 'draft' && <DraftBadge />}
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
