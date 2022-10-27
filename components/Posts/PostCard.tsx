/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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
      css={css`
        position: relative;
        height: 100%;
        padding: 1rem;
        border-radius: 5px;
        background-color: var(--surface);
        border: var(--border);
        box-shadow: var(--shadow);
        ${flat &&
        css`
          background-color: var(--background);
          border: none;
          box-shadow: none;
        `}
      `}
    >
      <h3
        css={css`
          margin-top: 0;
        `}
      >
        <Link href={slug}>
          <a>{title}</a>
        </Link>
      </h3>
      <PostMeta post={post} />
      {children}
    </article>
  )
}
