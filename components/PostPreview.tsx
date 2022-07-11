/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { MDXComponents } from './MDXComponents/MDXComponents'

type PostCardProps = {
  post: Post
  variant?: 'small' | 'large'
}

/**
 * A previewof a post, linking to the full blogpost.
 */
export const PostPreview: React.FC<PostCardProps> = ({
  post,
  variant = 'small',
}) => {
  const { title, slug, tags, date } = post
  const MDXContent = useMDXComponent(post.excerpt.code)

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
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => <span key={tag}>#{tag} </span>)}
      </div>
      {!!date && (
        <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
      )}
      <MDXContent components={MDXComponents} />

      <div>
        <Link href={post.slug}>…continue reading</Link>
      </div>
    </article>
  )
}
