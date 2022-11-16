import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { PostMeta } from './PostMeta'

type PostCardProps = {
  post: Post
  flat?: boolean
}

/**
 * A card representing a post, linking to the full blogpost.
 */
export const PostCard: React.FC<PropsWithChildren<PostCardProps>> = ({
  post,
  flat = false,
  children,
}) => {
  const { title, slug } = post
  return (
    <article
      className={`relative h-full p-4 rounded ${
        flat ? 'bg-background' : 'bg-surface border-2 border-border shadow-xl'
      }`}
    >
      <h3 className="mt-0">
        <Link href={slug}>
          <a>{title}</a>
        </Link>
      </h3>
      <PostMeta post={post} />
      {children}
    </article>
  )
}
