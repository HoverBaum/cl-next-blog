/**
 * A Blogpost featured either big or small.
 * The big version contains more information and the first image of the post if any.
 * The small variant only contains the first paragraph.
 * Both have a "read more" CTA.
 */

import { Img } from 'components/MDXComponents/Img'
import { MDXComponents } from 'components/MDXComponents/MDXComponents'
import { PostCard } from './PostCard'
import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'

type FeaturedPostProps = {
  post: Post
  variant?: 'big' | 'small'
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
  post,
  variant = 'small',
}) => {
  const MDXContent = useMDXComponent(post.excerpt.code)
  return (
    <PostCard flat={variant === 'big'} post={post}>
      {variant === 'big' && post.firstImage && (
        <Img src={post.firstImage.src} alt={post.firstImage.alt} />
      )}
      <MDXContent components={MDXComponents} />

      {/* Adding the read more always at the bottom and same bottom.
      One div creates the space, the other positions the link. */}
      <div className="h-8"></div>
      <div className="absolute bottom-4">
        <Link href={post.slug}>…continue reading</Link>
      </div>
    </PostCard>
  )
}
