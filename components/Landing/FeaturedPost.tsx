/** @jsxImportSource @emotion/react */
/**
 * A Blogpost featured either big or small.
 * The big version contains more information and the first image of the post if any.
 * The small variant only contains the first paragraph.
 * Both have a "read more" CTA.
 */

import { css } from '@emotion/react'
import { Button, Paragraph } from 'components/baum-ui'
import { Img } from 'components/MDXComponents/Img'
import { MDXComponents } from 'components/MDXComponents/MDXComponents'
import { PostCard } from 'components/PostCard'
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
  console.log(post)
  return (
    <div className={variant === 'small' ? 'shadow' : ''}>
      <PostCard
        title={post.title}
        tags={post.tags}
        slug={post.slug}
        date={post.date}
      >
        {variant === 'big' && post.firstImage && (
          <Img src={post.firstImage.src} alt={post.firstImage.alt} />
        )}
        <MDXContent components={MDXComponents} />

        {/* Adding the read more always at the bottom and same bottom.
      One div creates the space, the other positions the link. */}
        <div
          css={css`
            height: 2rem;
          `}
        ></div>
        <div
          css={css`
            position: absolute;
            bottom: 1rem;
          `}
        >
          <Link href={post.slug}>…continue reading</Link>
        </div>
      </PostCard>
    </div>
  )
}
