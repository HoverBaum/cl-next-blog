/** @jsxImportSource @emotion/react */
/**
 * A Blogpost featured either big or small.
 * The big version contains more information and the first image of the post if any.
 * The small variant only contains the first paragraph.
 * Both have a "read more" CTA.
 */

import { css } from '@emotion/react'
import { Paragraph } from 'components/baum-ui'
import { Post } from 'contentlayer/generated'

type FeaturedPostProps = {
  post: Post
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  console.log(post)

  return (
    <article
      css={css`
        padding-bottom: 2rem;
      `}
    >
      <h2>{post.title}</h2>
      <Paragraph>FEATURED CONTENT HERE</Paragraph>
    </article>
  )
}
