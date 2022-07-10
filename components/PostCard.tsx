/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { theme } from './theme'

type PostCardProps = {
  title: string
  slug: string
  tags?: string[]
  date?: string
}

/**
 * A card representing a post, linking to the full blogpost.
 */
export const PostCard: React.FC<PropsWithChildren<PostCardProps>> = ({
  title,
  slug,
  tags = [],
  date,
  children,
}) => {
  return (
    <article
      css={css`
        position: relative;
        height: 100%;
        padding: 1rem;
        border-radius: 5px;
        background-color: var(--surface1);
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
      <div>
        {tags.length > 0 && tags.map((tag) => <span key={tag}>#{tag} </span>)}
      </div>
      {!!date && (
        <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
      )}
      {children}
    </article>
  )
}
