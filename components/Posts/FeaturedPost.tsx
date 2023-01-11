/**
 * A Blogpost featured either big or small.
 * The big version contains more information and the first image of the post if any.
 * The small variant only contains the first paragraph.
 * Both have a "read more" CTA.
 */

import { Img } from 'components/MDXComponents/Img'
import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { MDXComponents as DefaultMDXComponent } from 'components/MDXComponents/MDXComponents'
import { Card } from 'components/Card'
import { PostMeta } from './PostMeta'

type FeaturedPostProps = {
  post: Post
  variant?: 'big' | 'small' | 'compact'
  MDXComponents?: any
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
  post,
  variant = 'small',
  MDXComponents = DefaultMDXComponent,
}) => {
  const MDXContent = useMDXComponent(post.excerpt.code)
  const { title, slug } = post

  return (
    <Card className={`h-full relative`}>
      <h3 className={`mt-0 ${variant === 'compact' ? 'text-3xl' : ''}`}>
        <Link href={slug}>
          <a>{title}</a>
        </Link>
      </h3>
      <PostMeta post={post} />
      {(variant === 'big' || variant == 'compact') && post.firstImage && (
        <Img src={post.firstImage.src} alt={post.firstImage.alt} />
      )}
      <MDXContent components={MDXComponents} />

      {/* Adding the read more always at the bottom and same bottom.
      One div creates the space, the other positions the link. */}
      <div className="h-8"></div>
      <div className={`text-center w-full absolute bottom-4 left-0`}>
        <Link href={post.slug}>…continue reading</Link>
      </div>
    </Card>
  )
}
